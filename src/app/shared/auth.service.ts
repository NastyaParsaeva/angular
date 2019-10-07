import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3004/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login (userLogin: string, userPassword: string) { 
    const body = {
      'login': userLogin,
      'password': userPassword,
    }
    return this.http.post<any>(`${BASE_URL}/login`, body).pipe(map(resp => {
      localStorage.setItem('token', resp.token);
      this.isAuthentificated();
      return resp.token;
    }));
  }

  logout(): void { 
    localStorage.removeItem('token');
    this.isAuthentificated();
  }

  isAuthentificated() { 
    const token = localStorage.getItem('token')
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  getUserInfo(token?: string): Observable<any> {
    if (!token) {
      token = localStorage.getItem('token');
    }
    return this.http.post(`${BASE_URL}/userinfo`, token);
  }
}
