import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon-list.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-list-pokemon-component',
  templateUrl: './list-pokemon-component.component.html',
  styleUrls: ['./list-pokemon-component.component.css']
})
export class ListPokemonComponentComponent implements OnInit{

  pokemonList: Pokemon[] = [];
  
  constructor(private pokemonService: PokemonService){}

  ngOnInit(): void {
    this.pokemonService.getAllPokemons().subscribe(resp => {
      this.pokemonList = resp.results;
    })
  }

}
