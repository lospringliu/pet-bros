import { NgModule } from '@angular/core';

// New imports to update based on AngularFire2 version 4
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseUserService } from './firebase-user.service';
import { FirebaseDataService } from './firebase-data.service';

// This needs to be converted to a Token
export const firebaseConfig = {
  apiKey: "AIzaSyDJy6UBsFx13jzSPFdfQJkLEcem2h0UFuQ",
  authDomain: "daszichan.firebaseapp.com",
  databaseURL: "https://daszichan.firebaseio.com",
  projectId: "daszichan",
  storageBucket: "daszichan.appspot.com",
  messagingSenderId: "198573319997"
};

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  exports: [
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    FirebaseUserService,
    FirebaseDataService
  ]
})
export class FirebaseModule { }
