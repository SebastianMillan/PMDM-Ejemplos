import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Agent } from 'src/app/models/agent-list.interface';
import { AgenteService } from 'src/app/service/agente.service';

@Component({
  selector: 'app-agent-list-component',
  templateUrl: './agent-list-component.component.html',
  styleUrls: ['./agent-list-component.component.css']
})
export class AgentListComponentComponent implements OnInit{
  agenteList: Agent[] = [];
  agenName = '';
  agentDesc = '';
  agentIcon = '';
  agentRole = '';
  
  constructor(private agentService: AgenteService, private modalService: NgbModal) { }
  
  ngOnInit(): void {
    this.agentService.getAgentList().subscribe(resp => {
      this.agenteList = resp.data;
    });
  }

  onAgentlicked(uuid: string, modal: any) {
    this.agentService.getAgentById(uuid).subscribe(agent => {
      this.agenName = agent.displayName;
      this.agentDesc = agent.description;
      this.agentIcon = agent.displayIcon;
      this.agentRole = agent.role.displayName;
      this.modalService.open(modal, {
        size:'lg'
      });
    })
  }
}
