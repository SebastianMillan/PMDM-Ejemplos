import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-approved',
  templateUrl: './auth-approved.component.html',
  styleUrl: './auth-approved.component.css'
})
export class AuthApprovedComponent implements OnInit{

  constructor(private authService: AuthService, private router: Router){}
  
  ngOnInit(): void {
    this.authService.createSession(localStorage.getItem('request_token')!).subscribe(resp => {
      localStorage.setItem('session_id', resp.session_id);      
      this.router.navigateByUrl('/profile');
    })
  }

}
