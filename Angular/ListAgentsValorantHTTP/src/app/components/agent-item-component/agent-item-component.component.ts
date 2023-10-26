import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Agent } from 'src/app/models/agent-list.interface';

@Component({
  selector: 'app-agent-item-component',
  templateUrl: './agent-item-component.component.html',
  styleUrls: ['./agent-item-component.component.css']
})
export class AgentItemComponentComponent {
  @Input() agent!: Agent;
  @Output() agentClick = new EventEmitter<string>();

  viewAgentDetail(uuid: string) {
    this.agentClick.emit(uuid);
  }
}
