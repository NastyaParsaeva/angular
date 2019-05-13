import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, User {
  id: number;
  firstName: string;
  lastName: string;

  constructor(private authService: AuthService, private router: Router) { 
    // this.authService = authService.getList();
  }

  ngOnInit() {
    this.id=1548;
    this.firstName = 'Anastasiia';
    this.lastName = 'Parsaeva';
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('login',  { skipLocationChange: true });
  }

  isAuthentificated(): boolean {
    return this.authService.isAuthentificated();
  }

}
