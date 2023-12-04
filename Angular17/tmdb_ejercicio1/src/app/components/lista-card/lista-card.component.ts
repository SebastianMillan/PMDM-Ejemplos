import { Component, Input } from '@angular/core';
import { List } from '../../models/list-of-lists.interface';

@Component({
  selector: 'app-lista-card',
  templateUrl: './lista-card.component.html',
  styleUrl: './lista-card.component.css'
})
export class ListaCardComponent {
  @Input() listToShow!: List;
}
