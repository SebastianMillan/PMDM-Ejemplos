import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs/operators';
import { GoogleAuthProvider } from "firebase/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email = '';
  password = '';

  constructor(public auth: AngularFireAuth) { }

  //authState es un observable que nos va a dar información del usuario
  user = this.auth.authState.pipe(map(authState => {
    console.log('authState: ', authState);
    if (authState!=null) {
      return authState;
    } else {
      return null;
    }
  }))
  
  loging() {
    console.log('login');
    this.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(user => {
        console.log('user logado: ', user);
      })
      .catch(error => {
        console.log('error user logado: ', error);
      })
  }

  logout() {
    console.log('logout');
    this.auth.signOut();
  }

  gloging() {
    console.log('google login');
    this.auth.signInWithPopup(new GoogleAuthProvider())
      .then(user => {
        console.log('user logado: ', user);
      })
      .catch(error => {
        console.log('error user logado: ', error);
      })
  }
}
