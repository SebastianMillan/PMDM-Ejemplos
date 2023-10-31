import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';

@Component({
  selector: 'app-movie-item-component',
  templateUrl: './movie-item-component.component.html',
  styleUrls: ['./movie-item-component.component.css']
})
export class MovieItemComponentComponent {
  @Input() movie!: Movie;

  getMovieImg() {
    return `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
  }
}
