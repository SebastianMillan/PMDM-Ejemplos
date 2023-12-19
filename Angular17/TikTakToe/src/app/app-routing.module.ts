import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TableroComponent } from './components/tablero/tablero.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, 
  { path: 'play', component: TableroComponent },
  { path: '', component:LoginComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
