import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public userLogin: string;
  public userPassword: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();
    this.authService.login(this.userLogin, this.userPassword).subscribe(response => {
      localStorage.setItem('token', response);
      this.router.navigateByUrl('');
    });
    
  }

}
