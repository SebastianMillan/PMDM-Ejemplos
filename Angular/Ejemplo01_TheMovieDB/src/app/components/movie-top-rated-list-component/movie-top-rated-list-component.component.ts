import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-top-rated-list-component',
  templateUrl: './movie-top-rated-list-component.component.html',
  styleUrls: ['./movie-top-rated-list-component.component.css']
})
export class MovieTopRatedListComponentComponent implements OnInit{

  topRatedMovieList: Movie[] = [];

  constructor(private movieService: MovieService) { }
  
  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies() {
    this.movieService.getTopRatedMovies().subscribe(resp => {
      this.topRatedMovieList = resp.results;
    });
  }

}
