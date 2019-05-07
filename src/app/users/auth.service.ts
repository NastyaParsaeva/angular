import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login() { }

  logout() { }

  isAuthentificated(): boolean { 
    return false;
  }

  getUserInfo() { }
}
