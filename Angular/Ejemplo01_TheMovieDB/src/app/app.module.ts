import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MoviePopularListComponentComponent } from './components/movie-popular-list-component/movie-popular-list-component.component';
import { MovieItemComponentComponent } from './components/movie-item-component/movie-item-component.component';
import { PageHomeComponentComponent } from './ui/page-home-component/page-home-component.component';
import { MovieTopRatedListComponentComponent } from './components/movie-top-rated-list-component/movie-top-rated-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviePopularListComponentComponent,
    MovieItemComponentComponent,
    PageHomeComponentComponent,
    MovieTopRatedListComponentComponent
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
