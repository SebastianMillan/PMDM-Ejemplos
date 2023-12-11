import { Component, Input } from '@angular/core';
import { Item } from '../../models/list-detail.interface';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {
  @Input() itemToShow!: Item;

  getMovieImage() {
    return "https://image.tmdb.org/t/p/w500" + this.itemToShow.poster_path;
  }
}
