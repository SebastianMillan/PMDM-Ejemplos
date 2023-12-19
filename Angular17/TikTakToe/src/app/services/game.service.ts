import { Injectable } from '@angular/core';
import { user } from '@angular/fire/auth';
import {
  Firestore,
  addDoc,
  collection,
  getDocs,
  query,
  doc,
} from '@angular/fire/firestore';

const COLLECTION_GAME = 'game'

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private firestore: Firestore) { }

  async newGame(name: string) {
    const docRef = await addDoc(collection(this.firestore, COLLECTION_GAME), {
      name: name
    })
  }
}
