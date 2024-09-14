import { Injectable, Signal, signal } from '@angular/core';
import { UserCredentials } from '../model/user-credentials';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  static KEY = 'username';

  private username = signal<string | null>(null);

  constructor(private router: Router) {
    this.username.set(localStorage.getItem(AuthenticationService.KEY));
  }
  
  
  sauvegarderAuthentificateur(userCredentials: UserCredentials){
    localStorage.setItem(AuthenticationService.KEY,userCredentials.username);
  }




  login(userCredentials: UserCredentials) {
    console.log('la requete d authentification est transmise au service');
    this.sauvegarderAuthentificateur(userCredentials);
    this.username.set(localStorage.getItem(AuthenticationService.KEY));
    console.log(this.username());
    this.router.navigate(['chat']);

  }

  logout() {
    localStorage.removeItem(AuthenticationService.KEY);
    this.username.set(null);
    this.router.navigate(['login']);
  }

  

  getUsername(): Signal<string | null> {
    return this.username;
  }
}
