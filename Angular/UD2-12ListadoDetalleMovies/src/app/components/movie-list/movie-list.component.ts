import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit{
  movieList: Movie[] = [];
  page = 1;
  numMoviesByPage = 0;
  totalMovies = 0;
  totalPages = 0;
  cantPageShow = 10;

  constructor(private movieService: MovieService){}

  ngOnInit(): void {
    this.movieService.getPopularList(this.page).subscribe(resp => {
      this.movieList = resp.results;
      this.numMoviesByPage = resp.results.length;
      this.totalMovies = resp.total_results;
      this.totalPages = resp.total_pages;
    })
  }

  loadPage() {
    this.movieService.getPopularList(this.page).subscribe(resp => {
      this.movieList = resp.results;
      this.numMoviesByPage = resp.results.length;
      this.totalMovies = resp.total_results;
      this.totalPages = resp.total_pages;
    });
  }
}
