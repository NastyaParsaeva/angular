import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { loginAction } from '../../store/actions/auth.actions'
import { selectAuthentificationStatus } from '../../store/selectors/auth.selector';
import { filter } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  public userLogin: string;
  public userPassword: string;
  public loginForm;

  constructor (
    private router: Router,
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
  ) {

    this.loginForm = this.formBuilder.group({
      userLogin: '',
      userPassword: ''
    });

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
    this.store.dispatch(loginAction({
      username: this.userLogin,
      password: this.userPassword
    }));
  }

  onLoginFormSubmit(form) {
    this.store.dispatch(loginAction({
      username: form.userLogin,
      password: form.userPassword
    }));
  }
}
