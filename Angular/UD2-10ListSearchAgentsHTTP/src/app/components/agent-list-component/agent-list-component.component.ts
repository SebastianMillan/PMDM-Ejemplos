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
  constructor(private agentService: AgentService, private ngbModal: NgbModal) { }
  agentIcon = '';
  agentName = '';
  agentRole = '';
  agentDesc = '';

  ngOnInit(): void {
    this.agentService.getAgentList().subscribe(resp => {
      this.listAgents = resp.data;
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
      }
    )
    })
  }
}
