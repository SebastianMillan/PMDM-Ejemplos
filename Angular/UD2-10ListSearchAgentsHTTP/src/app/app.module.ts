import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { AgentListComponentComponent } from './components/agent-list-component/agent-list-component.component';
import { AgentDetailsComponentComponent } from './components/agent-details-component/agent-details-component.component';
import { AgentSearchComponentComponent } from './components/agent-search-component/agent-search-component.component'


@NgModule({
  declarations: [
    AppComponent,
    AgentListComponentComponent,
    AgentDetailsComponentComponent,
    AgentSearchComponentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
