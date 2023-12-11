import { Component, OnInit } from '@angular/core';
import { FilmListResponse } from '../../models/item-list.interface';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/list-detail.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{

  listItem: Item[] = [];

  constructor(private itemService: ItemService) { }
  
  ngOnInit(): void {
    this.itemService.getPopularFilmsList().subscribe(resp => {
      this.listItem = resp.results;
    })
  }
  

}
