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

const COLLECTION_USERS = 'users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public firestore: Firestore) {}

  async createUser(name: string, age: number) {
    const docRef = await addDoc(collection(this.firestore, COLLECTION_USERS), {
      name: name,
      age: age,
    });
    console.log('Document written with ID: ', docRef.id);
  }

  async getUsers() {
    const users: any[] = []
    const docRef = collection(this.firestore, COLLECTION_USERS);
    const docSnap  = await getDocs(docRef);
    docSnap.forEach(doc => {
      users.push(doc.data());
    })
    return user;
  }
}
