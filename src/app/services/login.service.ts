import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isUserLoggedIn;

  constructor() {
    this.isUserLoggedIn = false;
  }

  setUserLoggenIn() {
    this.isUserLoggedIn = true;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }


}
