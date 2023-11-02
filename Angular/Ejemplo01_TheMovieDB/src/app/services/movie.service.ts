import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieListResponse } from '../models/movie-list.interface';
import { MovieResponse } from '../models/movie-item.interface';

const MOVIE_BASE_URL = 'https://api.themoviedb.org/3/movie'
const TOKEN = 'c69873949130194e8bc389f3e0cf7420';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) { }

  getPopularMovies() : Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${MOVIE_BASE_URL}/popular?api_key=${TOKEN}`);
  }
  getTopRatedMovies(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${MOVIE_BASE_URL}/top_rated?api_key=${TOKEN}`)
  }

  getMovieById(id: number): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${MOVIE_BASE_URL}/${id}?api_key=${TOKEN}`)
  }
}
