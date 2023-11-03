import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie-list.interface';
import { Trailer } from 'src/app/models/trailer-list.interface';
import { MovieService } from 'src/app/services/movie.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-movie-full-detail',
  templateUrl: './movie-full-detail.component.html',
  styleUrls: ['./movie-full-detail.component.css']
})
export class MovieFullDetailComponent implements OnInit{
  id = 1;
  movieToShow!: Movie;
  movieTrailers: Trailer[] = [];
  urlVideo = '';

  constructor(private route: ActivatedRoute, private movieService: MovieService, private sanitazer : DomSanitizer) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(p => this.id = +p['id'] )
    this.movieService.getMovieByID(this.id).subscribe(resp => { 
      this.movieToShow = resp;
      this.movieService.getListVideoByIdMovie(this.id).subscribe(vids => {
        this.movieTrailers = vids.results;
      })
    });
  }
  
  getMovieImg() {
    return `https://image.tmdb.org/t/p/w500${this.movieToShow.poster_path}`;
  }

  getURLVideo(video: Trailer) {
    if (video.site == 'YouTube') {
      return this.sanitazer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video.key}`);
    } else {
      return this.sanitazer.bypassSecurityTrustResourceUrl(`https://player.vimeo.com/video/${video.key}`);
    }
  }
}
