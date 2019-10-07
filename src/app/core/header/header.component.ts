import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { selectAuthentificationStatus, selectUser } from '../../store/selectors/auth.selector';
import { getUserInfoAction, logoutAction } from '../../store/actions/auth.actions';
import { User } from '../user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public isAuthentificated: boolean;
  public user: User;

  constructor (
    private router: Router,
    private store: Store<AppState>
  ) { 
    this.store.pipe(
      select(selectAuthentificationStatus),
      filter(val => val !== undefined)
    ).subscribe((isAuth: boolean) => {
      this.isAuthentificated = isAuth;
      if (!isAuth) {
        this.router.navigateByUrl('login');
      }
    });

    this.store.dispatch(getUserInfoAction({}));

    this.store.pipe(
      select(selectUser),
      filter(resp => resp !== null)
    ).subscribe((user: User) => {
      this.user = user;
    });
  }

  public logout() {
    this.store.dispatch(logoutAction());
  }
}
