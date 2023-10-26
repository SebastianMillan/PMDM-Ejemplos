import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/character-list.interface';

@Component({
  selector: 'app-character-item-component',
  templateUrl: './character-item-component.component.html',
  styleUrls: ['./character-item-component.component.css']
})
export class CharacterItemComponentComponent {
  @Input() character!: Character;
}
