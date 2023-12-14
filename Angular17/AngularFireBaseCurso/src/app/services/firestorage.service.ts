import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { Observable, finalize, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  path = '';
  task!: AngularFireUploadTask;
  uploadProgress = new Observable();
  downloadURL = of('');
  constructor(private auth: AuthService, public firestorage: AngularFireStorage){}

  upload(event: any) {
    console.log('event: ', event);

    let ext = '.jpg';
    if (event.target.files[0].type === 'image/png') {
      ext = '.png';  
    }

    const path = this.path + this.auth.authUser.uid + ext;
    const ref = this.firestorage.ref(path);
    this.task = this.firestorage.upload(path, event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(finalize(() => {
      this.downloadURL = ref.getDownloadURL();
      console.log('this.downloadURL: ', this.downloadURL);
      
    })).subscribe();
    /*
    this.firestorage.upload('images/' + this.auth.authUser.uid + ext, event.target.files[0])
      .then(result => {
        console.log('result: '+result);
      }).catch(error => {
        console.log('error: '+error);
      })
      */
  }
}
