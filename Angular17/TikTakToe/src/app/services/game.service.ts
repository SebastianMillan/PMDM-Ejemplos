import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
  doc, setDoc,
  updateDoc
} from '@angular/fire/firestore';

const COLLECTION_GAME = 'game'

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private firestore: Firestore) { }

  newGame(namePlayer: string) {
    const q = query(collection(this.firestore, COLLECTION_GAME), where("namePlayer2", "==", null), where("namePlayer1","!=", namePlayer));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const game: string[] = [];
      querySnapshot.forEach((doc) => {
        game.push(doc.id);
      });
      
      if (game.length === 0) {
        console.log('Ningun juego disponible');
        const docRef = addDoc(collection(this.firestore, COLLECTION_GAME), {
          namePlayer1: namePlayer,
          namePlayer2: null,
          enEspera: false
        })
        localStorage.setItem('player1', namePlayer);
      } else {
        console.log('Existen ' + game.length + ' juegos disponibles');
        const docRef = doc(this.firestore, `${COLLECTION_GAME}/${game[0]}`);
        const document = updateDoc(docRef, {
          namePlayer2: namePlayer
        });
        localStorage.setItem('player2', namePlayer);
      }
    });   
  }
}
