import { Component, OnInit } from '@angular/core';
import { List } from '../../models/list-of-lists.interface';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-list-list-page',
  templateUrl: './list-list-page.component.html',
  styleUrl: './list-list-page.component.css'
})
export class ListListPageComponent implements OnInit{
  
  listOfList: List[] = [];

  constructor(private accountService: AccountService) { }
 
  ngOnInit(): void {
    this.accountService.getMyLists().subscribe(resp => {
      this.listOfList = resp.results;
    })
  }
  
}
