import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponentComponent } from '../components/list-pokemon-component/list-pokemon-component.component';
import { ListBerryComponentComponent } from '../components/list-berry-component/list-berry-component.component';

const routes: Routes = [
  {path:'pokemon', component:ListPokemonComponentComponent},
  {path: 'berry', component: ListBerryComponentComponent},
  {path: '', pathMatch: 'full', component: ListPokemonComponentComponent},
  {path:'**', component:ListPokemonComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
