import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { AccountDetailResponse } from '../../models/account-detail.interface';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrl: './profile-detail.component.css'
})
export class ProfileDetailComponent implements OnInit{

  profile!: AccountDetailResponse;
  profileName = '';

  constructor(private accountService: AccountService){}

  ngOnInit(): void {
    this.accountService.getAccountDetails().subscribe(resp => {
      this.profileName = resp.username.replace('', ' ');
      this.profile = resp;
    })
  }
}
