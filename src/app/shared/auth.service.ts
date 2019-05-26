import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable, Subscription } from 'rxjs';

const BASE_URL = 'http://localhost:3004/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login (userLogin, userPassword) { 
    const body = {
      'login': userLogin,
      'password': userPassword,
    }
    return this.http.post(`${BASE_URL}/login`, body).pipe(map(resp => {
      return resp.token;
    }));
  }

  logout() { 
    localStorage.removeItem('token');
  }

  isAuthentificated() { 
    const token = localStorage.getItem('token')
    if (token) {
      return true;
    } else {
      return false; 
    }
  }

  getUserInfo(token: string) { 
    const authHeader = new HttpHeaders().set('Authorization', token);
    return this.http.post(`${BASE_URL}/userinfo`, null, {headers: authHeader});
  }
}
