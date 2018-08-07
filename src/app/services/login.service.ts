import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isUserLoggedIn;
  private userName;

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
