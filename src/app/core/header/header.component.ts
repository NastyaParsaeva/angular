import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public userId: number;
  public userFirstName: string;
  public userLastName: string;
  public isAuthentificated: boolean;

  constructor(private authService: AuthService, private router: Router) { 
    // this.isAuthentificated = this.authService.isAuthentificated();
    // router.events.pipe(
    //   filter(event => event instanceof NavigationStart)
    // ).subscribe((val) => {
    //   this.checkIfAuthentificated();
    // });
  }

  public ngOnInit() {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationStart) {
        this.getUserInfo();
      }
    });
  }

  public getUserInfo() {
    const token = localStorage.getItem('token');

    if (token) {
      this.authService.getUserInfo(token).subscribe(response => {
        this.userFirstName = response.name.first;
        this.userLastName = response.name.last;
        this.userId = response.id;
      });
    }
  }

  public checkIfAuthentificated() {
    this.isAuthentificated = this.authService.isAuthentificated();
  }

  public logout() {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

}
