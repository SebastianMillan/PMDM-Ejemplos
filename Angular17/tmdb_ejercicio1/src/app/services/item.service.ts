import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';
import { FilmListResponse } from '../models/item-list.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getPopularFilmsList(): Observable<FilmListResponse> {
      return this.http.get<FilmListResponse>(`${environment.apiBaseUrl}/movie/popular?api_key=${environment.apiKey}`);
    }
}
