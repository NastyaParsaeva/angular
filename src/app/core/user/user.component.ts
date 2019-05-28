import { Component, OnInit, OnChanges, DoCheck, AfterViewChecked } from '@angular/core';
import { User } from '../user.model';
import { AuthService } from '../../shared/auth.service';
import { Router, NavigationStart } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';

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
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationStart) {
        this.getUserInfo();
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

  isAuthentificated(): boolean {
    return this.authService.isAuthentificated();
  }

  getUserInfo() {
    const token = localStorage.getItem('token');

    if (token) {
      this.authService.getUserInfo(token).subscribe(response => {
        this.firstName = response.name.first;
        this.lastName = response.name.last;
      });
    }
  }
}
