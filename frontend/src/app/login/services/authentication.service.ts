import { Injectable, Signal, signal } from '@angular/core';
import { UserCredentials } from '../model/user-credentials';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  static KEY = 'username';

  private username = signal<string | null>(null);

  constructor() {
    this.username.set(localStorage.getItem(AuthenticationService.KEY));
  }
  
  
  sauvegarderAuthentificateur(userCredentials: UserCredentials){
    localStorage.setItem(userCredentials.username,userCredentials.password);
  }

  lireAuthentificateur(userCredentials: UserCredentials){
    return localStorage.getItem(userCredentials.username);
  }


  login(userCredentials: UserCredentials) {
    console.log('la requete d authentification est transmise au service');
    this.sauvegarderAuthentificateur(userCredentials);
    const value = this.lireAuthentificateur(userCredentials);
    console.log(value);
    // À faire
  }

  logout() {
    // À faire
  }

  

  getUsername(): Signal<string | null> {
    return this.username;
  }
}
