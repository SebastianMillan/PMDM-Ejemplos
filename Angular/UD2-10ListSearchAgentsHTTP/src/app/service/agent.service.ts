import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AgentListResponse } from '../models/agent-list.interface';
import { AgentDetailsResponse } from '../models/agent-details.insterface';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http: HttpClient) { }

  getAgentList(): Observable<AgentListResponse>{
    return this.http.get<AgentListResponse>('https://valorant-api.com/v1/agents');
  }
  getAgentById(uuid: string): Observable<AgentDetailsResponse>{
    return this.http.get<AgentDetailsResponse>(`https://valorant-api.com/v1/agents/${uuid}`)
  }
}
