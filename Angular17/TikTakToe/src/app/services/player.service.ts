import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
} from '@angular/fire/firestore';

const COLLECTION_PLAYER = 'player'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private firestore: Firestore) { }

  async newPlayer(name: string) {
    const docRef = await addDoc(collection(this.firestore, COLLECTION_PLAYER), {
      name: name,
    })
  }
}
