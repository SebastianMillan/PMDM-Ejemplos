import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieListResponse } from '../models/movie-list.interface';
import { MovieDetailsResponse } from '../models/move-details.interface';
import { TrailerListResponse } from '../models/trailer-list.interface';

const MOVIE_BASE_URL = 'https://api.themoviedb.org/3/movie'
const TOKEN = 'c69873949130194e8bc389f3e0cf7420';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularList(page: number) : Observable<MovieListResponse>{
    return this.http.get<MovieListResponse>(`${MOVIE_BASE_URL}/popular?api_key=${TOKEN}&page=${page}`);
  }

  getMovieByID(id: number): Observable<MovieDetailsResponse>{
    return this.http.get<MovieDetailsResponse>(`${MOVIE_BASE_URL}/${id}?api_key=${TOKEN}`);
  }

  getListVideoByIdMovie(id: number): Observable<TrailerListResponse>{
    return this.http.get<TrailerListResponse>(`${MOVIE_BASE_URL}/${id}/videos?api_key=${TOKEN}`);
  }
}
