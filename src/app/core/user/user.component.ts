import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, User {
  id: number;
  firstName: string;
  lastName: string;

  constructor(private authService: AuthService) { 
    // this.authService = authService.getList();
  }

  ngOnInit() {
    this.id=1548;
    this.firstName = 'Anastasiia';
    this.lastName = 'Parsaeva';
  }

  logout() {
    this.authService.logout();
  }

  isAuthentificated(): boolean {
    return this.authService.isAuthentificated();
  }

}
