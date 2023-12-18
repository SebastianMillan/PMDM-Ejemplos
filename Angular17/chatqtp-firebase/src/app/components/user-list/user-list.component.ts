import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{

  userList: any[] = [];

  constructor(private userService: UserService) { }
  
  ngOnInit(): void {
    this.userList = await this.userService.getUsers();
  }

}
