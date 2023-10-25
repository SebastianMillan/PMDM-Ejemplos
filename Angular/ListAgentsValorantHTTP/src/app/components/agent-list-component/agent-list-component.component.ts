import { Component, OnInit } from '@angular/core';
import { Agent } from 'src/app/models/agent-list.interface';
import { AgenteService } from 'src/app/service/agente.service';

@Component({
  selector: 'app-agent-list-component',
  templateUrl: './agent-list-component.component.html',
  styleUrls: ['./agent-list-component.component.css']
})
export class AgentListComponentComponent implements OnInit{
  agenteList: Agent[] = [];

  constructor(private agentService: AgenteService) { }
 
  ngOnInit(): void {
    this.agentService.getAgentList().subscribe(resp => {
      this.agenteList = resp.data;
    });
  }

  onAgentlicked(uuid: string) {
  }
}
