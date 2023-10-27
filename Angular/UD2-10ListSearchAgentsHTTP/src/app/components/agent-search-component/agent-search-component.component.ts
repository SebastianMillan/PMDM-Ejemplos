import { Component, EventEmitter, Output } from '@angular/core';
import { Agent } from 'src/app/models/agent-list.interface';

@Component({
  selector: 'app-agent-search-component',
  templateUrl: './agent-search-component.component.html',
  styleUrls: ['./agent-search-component.component.css']
})
export class AgentSearchComponentComponent {

  @Output() nameAgentToSearch = new EventEmitter<string>;
  textToSearch = '';

  getNameToSearch() {
    this.nameAgentToSearch.emit(this.textToSearch);
  }

}
