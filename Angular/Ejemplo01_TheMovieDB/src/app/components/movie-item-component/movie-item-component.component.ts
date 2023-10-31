import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OutletContext } from '@angular/router';
import { Movie } from 'src/app/models/movie-list.interface';

@Component({
  selector: 'app-movie-item-component',
  templateUrl: './movie-item-component.component.html',
  styleUrls: ['./movie-item-component.component.css']
})
export class MovieItemComponentComponent {
  @Input() movie!: Movie;
  @Output() movieClick = new EventEmitter<number>();

  getMovieImg() {
    return `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
  }

  viewMovieDetail(id:number) {
    this.movieClick.emit(id);
  }



}
