import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { SeachDetailComponent } from './components/seach-detail/seach-detail.component';
import { TrailersListComponent } from './components/trailers-list/trailers-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieFullDetailComponent } from './components/movie-full-detail/movie-full-detail.component'


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailComponent,
    SeachDetailComponent,
    TrailersListComponent,
    MovieFullDetailComponent
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
