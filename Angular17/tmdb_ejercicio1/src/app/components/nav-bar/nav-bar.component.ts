import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RequestTokenResponse } from '../../models/request-token.interface';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';
import { SessionResponse } from '../../models/session.interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(private http: HttpClient) { }
  
  getRequestToken(): Observable<RequestTokenResponse>{
    return this.http.get<RequestTokenResponse>(`${environment.apiBaseUrl}/authentication/token/new`, {
      headers: {
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }

  createSession(token: string): Observable<SessionResponse>{
    return this.http.post<SessionResponse>(`${environment.apiBaseUrl}/authentication/session/new`, {
      request_token: token
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }
}
