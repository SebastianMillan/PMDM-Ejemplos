import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './ui/login-page/login-page.component';
import { ProfilePageComponent } from './ui/profile-page/profile-page.component';
import { FormListPageComponent } from './ui/form-list-page/form-list-page.component';
import { ListDetailsComponent } from './ui/list-details/list-details.component';
import { HomePageComponent } from './ui/home-page/home-page.component';

const routes: Routes = [
  { path: "login", component: LoginPageComponent },
  { path: "home", component: HomePageComponent },
    { path: "profile/list/:id", component: ListDetailsComponent },
  {path: "createList", component: FormListPageComponent },
  {path: "profile", component: ProfilePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
