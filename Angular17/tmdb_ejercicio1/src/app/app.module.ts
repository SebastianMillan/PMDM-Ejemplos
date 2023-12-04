import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './ui/login-page/login-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AuthApprovedComponent } from './components/auth-approved/auth-approved.component';
import { ProfileDetailComponent } from './components/profile-detail/profile-detail.component';
import { ProfilePageComponent } from './ui/profile-page/profile-page.component';
import { ListaCardComponent } from './components/lista-card/lista-card.component';
import { ListListComponent } from './components/list-list/list-list.component';
import { FormListPageComponent } from './ui/form-list-page/form-list-page.component';
import { HttpFeatureKind, provideHttpClient, withFetch } from '@angular/common/http';
import { ListDetailsComponent } from './ui/list-details/list-details.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { HomePageComponent } from './ui/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavBarComponent,
    AuthApprovedComponent,
    ProfileDetailComponent,
    ProfilePageComponent,
    ListaCardComponent,
    ListListComponent,
    FormListPageComponent,
    ListDetailsComponent,
    ItemCardComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
