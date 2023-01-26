import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { get, getDatabase, onValue, push, ref, set } from "firebase/database";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDbService {

  app = initializeApp(environment.firebaseConfig);
  database = getDatabase(this.app);
  constructor() { }


  post(userId: string, name:string, email:string, imageUrl:string){
      const userList = ref(this.database, 'users')
      const newUser = push(userList)
      set(newUser, {
        email: email,
        profile_picture: imageUrl,
        username: name,
      })
  }
}
