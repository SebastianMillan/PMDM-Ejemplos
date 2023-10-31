import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieListResponse } from '../models/movie-list.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  token = 'c69873949130194e8bc389f3e0cf7420';
  constructor(private http: HttpClient) { }

  getPopularMovies() : Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`https://api.themoviedb.org/3/movie/popular?api_key=${this.token}`);
  }
  getTopRatedMovies(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.token}`)
  }
}
