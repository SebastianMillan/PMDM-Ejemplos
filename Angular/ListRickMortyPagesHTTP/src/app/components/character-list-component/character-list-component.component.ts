import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character-list.interface';
import { CharacterService } from 'src/app/service/character.service';

@Component({
  selector: 'app-character-list-component',
  templateUrl: './character-list-component.component.html',
  styleUrls: ['./character-list-component.component.css']
})
export class CharacterListComponentComponent implements OnInit{
  
  listCharacter: Character[] = [];
  page = 1;
  pageSize = 20;
  count = 0;
  cantPageShow = 6;

  constructor(private characterService: CharacterService){}

  ngOnInit(): void {
    this.characterService.getCharacterPage(this.page).subscribe(cha => {
      this.listCharacter = cha.results;
    });
    this.characterService.getCharacterList().subscribe(cha => {
      this.count = cha.info.count;
    })
  }

  pageSelected() {
    this.characterService.getCharacterPage(this.page).subscribe(cha => {
      this.listCharacter = cha.results;
    });
  }
}
