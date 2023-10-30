import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ListPokemonComponentComponent } from './components/list-pokemon-component/list-pokemon-component.component';
import { ListBerryComponentComponent } from './components/list-berry-component/list-berry-component.component';
import { CardPokemonComponentComponent } from './components/card-pokemon-component/card-pokemon-component.component';
import { CardBerryComponentComponent } from './components/card-berry-component/card-berry-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPokemonComponentComponent,
    ListBerryComponentComponent,
    CardPokemonComponentComponent,
    CardBerryComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
