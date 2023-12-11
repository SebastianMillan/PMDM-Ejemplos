import { Component, Input } from '@angular/core';
import { List } from '../../models/list-of-lists.interface';

@Component({
  selector: 'app-list-list',
  templateUrl: './list-list.component.html',
  styleUrl: './list-list.component.css'
})
export class ListListComponent {
  @Input() listOfList: List[] = [];
}
