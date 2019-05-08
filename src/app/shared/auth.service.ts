import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userId = 1548;
  public firstName = 'Anastasiia';
  public lastName = 'Parsaeva';

  constructor() { }

  login() { 
    console.log('logged in succesfully');
    localStorage.setItem('userId', ''+this.userId);
    localStorage.setItem('firstName', this.firstName);
    localStorage.setItem('lastName', this.lastName);
  }

  logout() { 
    localStorage.removeItem('userId');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    console.log('logout');
  }

  isAuthentificated(): boolean { 
    if (localStorage.getItem('userId')) {
      return true;
    }
    return false;
  }

  getUserInfo(): string { 
    return `${localStorage.getItem('firstName')} ${localStorage.getItem('lastName')}`;
  }
}
