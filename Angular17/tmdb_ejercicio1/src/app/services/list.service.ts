import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { CreateListResponse } from '../models/create-list.interface';
import { DetailListResponse } from '../models/list-detail.interface';
import { ListResponse } from '../models/list-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  createList(name: string | undefined | null, descripcion: string | undefined | null, language: string | undefined | null): Observable<CreateListResponse>{
    return this.http.post<CreateListResponse>(`${environment.apiBaseUrl}/list?session_id=${localStorage.getItem('session_id')}`, {
      name: name,
      description: descripcion,
      language: language
    },
    {
      headers: {
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }

  getDetailList(id:string): Observable<DetailListResponse>{
    return this.http.get<DetailListResponse>(`${environment.apiBaseUrl}/list/${id}?session_id=${localStorage.getItem('session_id')}`,
    {
      headers: {
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }

  addMovieToList(movieId: string, idList:string): Observable<ListResponse>{
    return this.http.post<ListResponse>(`${environment.apiBaseUrl}/list/${idList}/add_item?session_id=${localStorage.getItem('session_id')}`, {
      media_id:movieId
    },
    {
      headers: {
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }

  removeMovieToList(movieId: string, idList:string): Observable<ListResponse>{
    return this.http.post<ListResponse>(`${environment.apiBaseUrl}/list/${idList}/remove_item?session_id=${localStorage.getItem('session_id')}`, {
      media_id:movieId
    },
    {
      headers: {
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }

  removeList(id:string): Observable<ListResponse>{
    return this.http.delete<ListResponse>(`${environment.apiBaseUrl}/list/${id}?session_id=${localStorage.getItem('session_id')}`,
     {
      headers: {
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }

  clearList(id:string): Observable<ListResponse>{
    return this.http.post<ListResponse>(`${environment.apiBaseUrl}/list/${id}/clear?confirm=true&session_id=${localStorage.getItem('session_id')}`, {},
     {
      headers: {
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }
}
