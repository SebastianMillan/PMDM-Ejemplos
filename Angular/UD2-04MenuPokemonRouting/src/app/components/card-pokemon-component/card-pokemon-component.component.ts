import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon-list.interface';

@Component({
  selector: 'app-card-pokemon-component',
  templateUrl: './card-pokemon-component.component.html',
  styleUrls: ['./card-pokemon-component.component.css']
})
export class CardPokemonComponentComponent {

  @Input() pokemon!: Pokemon;

  getPokemonImg() {
    return `https://img.pokemondb.net/sprites/black-white/normal/${this.pokemon.name}.png`
  }
}
