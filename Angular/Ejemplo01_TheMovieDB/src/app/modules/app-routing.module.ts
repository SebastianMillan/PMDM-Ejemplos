import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviePopularListComponentComponent } from '../components/movie-popular-list-component/movie-popular-list-component.component';
import { combineLatest } from 'rxjs';
import { MovieTopRatedListComponentComponent } from '../components/movie-top-rated-list-component/movie-top-rated-list-component.component';
import { PageHomeComponentComponent } from '../ui/page-home-component/page-home-component.component';

const routes: Routes = [
  {path:'popular-movies', component: PageHomeComponentComponent},
  { path: 'top-rated-movies', component: PageHomeComponentComponent },
  {path: '', pathMatch: 'full', component: PageHomeComponentComponent},
  {path:'**', component:PageHomeComponentComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
