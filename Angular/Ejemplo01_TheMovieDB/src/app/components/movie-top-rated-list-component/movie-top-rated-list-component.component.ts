import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Movie } from 'src/app/models/movie-list.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-top-rated-list-component',
  templateUrl: './movie-top-rated-list-component.component.html',
  styleUrls: ['./movie-top-rated-list-component.component.css']
})
export class MovieTopRatedListComponentComponent implements OnInit{

  topRatedMovieList: Movie[] = [];
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
    this.movieService.getTopRatedMovies().subscribe(resp => {
      this.topRatedMovieList = resp.results;
    });
  }

}
