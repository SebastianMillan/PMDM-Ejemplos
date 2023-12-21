import { Component } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';
import {collection, query, where, onSnapshot} from '@angular/fire/firestore'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  name: string = '';

  constructor(private playerService: PlayerService, private router: Router, private gameService: GameService){}

  createPlayer() {
    this.playerService.newPlayer(this.name);
    this.gameService.newGame(this.name);
    this.router.navigateByUrl('/play')
  }
}
