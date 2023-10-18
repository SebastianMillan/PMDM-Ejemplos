import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { RegisterScreenComponent } from './register-screen/register-screen.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponentComponent } from './card-component/card-component.component';
import { CardRestauranteComponent } from './card-restaurante/card-restaurante.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    RegisterScreenComponent,
    CardComponentComponent,
    CardRestauranteComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
