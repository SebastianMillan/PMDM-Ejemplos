import { Component, Input } from '@angular/core';
import { Berry } from 'src/app/models/berry-list.interface';

@Component({
  selector: 'app-card-berry-component',
  templateUrl: './card-berry-component.component.html',
  styleUrls: ['./card-berry-component.component.css']
})
export class CardBerryComponentComponent {
  @Input() berry!: Berry;

  getBerryImg() {
    return `https://img.pokemondb.net/sprites/items/${this.berry.name}-berry.png`
  }
}
