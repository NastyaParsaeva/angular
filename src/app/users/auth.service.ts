import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login() { }

  logout() { 
    console.log('logout');
  }

  isAuthentificated(): boolean { 
    return false;
  }

  getUserInfo(): string { 
    return null;
  }
}
