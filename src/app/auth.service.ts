import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  createUser(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .catch(error => console.error(error));
  }

  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .catch(error => console.error(error));
  }

  logout() {
    return this.afAuth.signOut();
  }
}
