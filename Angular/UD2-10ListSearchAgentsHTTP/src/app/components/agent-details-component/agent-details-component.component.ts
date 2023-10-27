import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Agent } from 'src/app/models/agent-list.interface';

@Component({
  selector: 'app-agent-details-component',
  templateUrl: './agent-details-component.component.html',
  styleUrls: ['./agent-details-component.component.css']
})
export class AgentDetailsComponentComponent {
  @Input() agent!: Agent;
  @Output() agentClick = new EventEmitter<string>;

  viewAgentDetail(uuid: string) {
    this.agentClick.emit(uuid);
  }

}
