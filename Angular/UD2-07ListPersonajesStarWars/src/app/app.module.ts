import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PeopleListComponentComponent } from './components/people-list-component/people-list-component.component';
import { PeopleItemComponentComponent } from './components/people-item-component/people-item-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponentComponent,
    PeopleItemComponentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
