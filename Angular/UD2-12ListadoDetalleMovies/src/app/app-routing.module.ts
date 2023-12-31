import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieFullDetailComponent } from './components/movie-full-detail/movie-full-detail.component';

const routes: Routes = [
  { path: 'movies', component: MovieListComponent },
  {path:'movie/:id', component:MovieFullDetailComponent},
  {path: '', redirectTo: '/movies', pathMatch:'full'},
  {path:'**', redirectTo: '/movies'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
