import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
} from '@angular/fire/firestore';

const COLLECTION_GAME = 'game'

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private firestore: Firestore) { }

  async newGame(idPlayer1: string, idPlayer2: string) {
    const docRef = await addDoc(collection(this.firestore, COLLECTION_GAME), {
      idPlayer1: idPlayer1,
      idPlayer2: idPlayer2
    })
  }
}
