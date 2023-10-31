import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Movie } from 'src/app/models/movie-list.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-popular-list-component',
  templateUrl: './movie-popular-list-component.component.html',
  styleUrls: ['./movie-popular-list-component.component.css']
})
export class MoviePopularListComponentComponent implements OnInit{

  popularMovieList: Movie[] = [];
  movieName = '';
  movieOverview = '';
  movieImg = '';
  movieLenguaje = '';
  movieReleaseDate = '';
  constructor(private movieService: MovieService, private modalService: NgbModal) { }
  
  ngOnInit(): void {
    this.getAllMovies();
  }

  onMovieClicked(id: number, modal: any) {
    this.movieService.getMovieById(id).subscribe(mo => {
      this.movieName = mo.title
      this.movieOverview = mo.overview;
      this.movieLenguaje = mo.original_language;
      this.movieReleaseDate = mo.release_date;
      this.movieImg = `https://image.tmdb.org/t/p/w500${mo.poster_path}`
      this.modalService.open(modal, {
        size:'lg'
      });
    })
  }

  getAllMovies() {
    this.movieService.getPopularMovies().subscribe(resp => {
      this.popularMovieList = resp.results;
    })
  }
}
