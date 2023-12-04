import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './ui/login-page/login-page.component';
import { ListListPageComponent } from './ui/list-list-page/list-list-page.component';
import { ProfilePageComponent } from './ui/profile-page/profile-page.component';
import { FormListPageComponent } from './ui/form-list-page/form-list-page.component';

const routes: Routes = [
  { path: "login", component: LoginPageComponent },
  { path: "home", component: LoginPageComponent },
  {path: "createList", component: FormListPageComponent },
  {path: "profile", component: ProfilePageComponent },
  {path:"profile/lists", component: ListListPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
