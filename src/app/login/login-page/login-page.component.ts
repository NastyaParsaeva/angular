import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { login } from '../../store/actions/auth.actions'
import { selectAuthentificationStatus } from '../../store/selectors/auth.selector';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  public userLogin: string;
  public userPassword: string;

  constructor (
    private router: Router,
    private store: Store<AppState>,
  ) { 
    this.store.pipe(
      select(selectAuthentificationStatus),
      filter(val => val !== undefined)
    ).subscribe((isAuth: boolean) => {
      if (isAuth) {
        this.router.navigateByUrl('');
      }
    });
  }

  loginUser(event: Event) {
    event.preventDefault();
    this.store.dispatch(login({
      username: this.userLogin,
      password: this.userPassword
    }));
  }
}
