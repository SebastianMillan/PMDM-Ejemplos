import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountDetailResponse } from '../models/account-detail.interface';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { ListOfListsResponse } from '../models/list-of-lists.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccountDetails(): Observable<AccountDetailResponse>{
    return this.http.get<AccountDetailResponse>(`${environment.apiBaseUrl}/account?session_id=${localStorage.getItem('session_id')}`, {
       headers: {
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }

  getMyLists(): Observable<ListOfListsResponse>{
    return this.http.get<ListOfListsResponse>(`${environment.apiBaseUrl}/account/lists?session_id=${localStorage.getItem('session_id')}`, {
       headers: {
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }
}
