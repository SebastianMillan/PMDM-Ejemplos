import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Agent } from 'src/app/models/agent-list.interface';
import { AgentService } from 'src/app/service/agent.service';

@Component({
  selector: 'app-agent-list-component',
  templateUrl: './agent-list-component.component.html',
  styleUrls: ['./agent-list-component.component.css']
})
export class AgentListComponentComponent implements OnInit{
  listAgents: Agent[] = [];
  agentIcon = '';
  agentName = '';
  agentRole = '';
  agentDesc = '';

  constructor(private agentService: AgentService, private ngbModal: NgbModal) { }

  ngOnInit(): void {
    this.agentService.getAgentList().subscribe(resp => {
      this.listAgents = resp.data.filter(a => a.isPlayableCharacter);
    })
  }

  searchingAgent(name: string) {
    this.agentService.getAgentList().subscribe(resp => {
      this.listAgents = resp.data.filter(a => {
        a.displayName.toLowerCase().includes(name.toLowerCase())
        && a.isPlayableCharacter
      })
    })
  }

  onAgentClicked(uuid: string, modal: any) {
    this.agentService.getAgentById(uuid).subscribe(resp => {
      this.agentIcon = resp.data.displayIcon;
      this.agentName = resp.data.displayName;
      this.agentRole = resp.data.role.displayName;
      this.agentDesc = resp.data.description;
      this.ngbModal.open(modal, {
        size: 'lg'
      })
    })
  }
}
