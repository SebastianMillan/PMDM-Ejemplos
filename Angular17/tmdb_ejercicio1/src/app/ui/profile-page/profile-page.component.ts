import { Component, OnInit } from '@angular/core';
import { List } from '../../models/list-of-lists.interface';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent implements OnInit{
  listOfList: List[] = [];

  constructor(private accountService: AccountService) { }
 
  ngOnInit(): void {
    this.accountService.getMyLists().subscribe(resp => {
      this.listOfList = resp.results;
      console.log(resp.results);
    })
  }
}
