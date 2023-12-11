import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RequestTokenResponse } from '../../models/request-token.interface';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';
import { SessionResponse } from '../../models/session.interface';
import { AuthService } from '../../services/auth.service';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  successSession: boolean = false;
  avatarPath: string = '';

  constructor(private authService: AuthService, private accountService: AccountService){}
  
  ngOnInit(): void {
    this.accountService.getAccountDetails().subscribe(resp => {
      if (resp != null) {
        this.successSession = true;
        this.avatarPath = resp.avatar.tmdb.avatar_path;
      }
    })
  }

  logging() {
    this.authService.getRequestToken().subscribe(resp => {
      localStorage.setItem('request_token', resp.request_token);
      window.location.href = `https://www.themoviedb.org/authenticate/${localStorage.getItem('request_token')}?redirect_to=http://localhost:4200/approved`;
    })
  }

  getImgAvatar() {
    return `https://image.tmdb.org/t/p/w500${this.avatarPath}`;
  }
  
}
