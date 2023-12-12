import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = environment.title;
  email =! '';
  password = '';
  constructor(public authService: AuthService) { }
  
}
