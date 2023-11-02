import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {
  @Input() movie!: Movie;

  getMovieImg() {
    return `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
  }
}
