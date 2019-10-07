import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../shared/auth.service';
import { AuthActionTypes } from '../actions/auth.actions';
import { mergeMap, catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import * as AuthActions from '../actions/auth.actions';
import { of, Observable } from 'rxjs';
import { AppState } from '../state/app.state';
import { Store } from '@ngrx/store';
import { User } from 'src/app/core/user.model';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private store: Store<AppState>,
    ) {}

 
    login$ = createEffect((): Observable<any> => {
        return this.actions$.pipe(
            ofType(AuthActionTypes.login),
            switchMap((action: { username: string, password: string }) => {
                return this.authService.login(action.username, action.password).pipe(
                    map((token: string) => {
                        // return AuthActions.getUserInfo({ token });
                        return AuthActions.loginSuccess();
                    }),
                    catchError((error: string) => {
                        return of(AuthActions.loginReject({ errorCode: error }));
                }));
            }));
    });

    getUserInfo$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActionTypes.getUserInfo),
            exhaustMap((action: { token: string }) => {
                return this.authService.getUserInfo(action.token).pipe(
                    map((userInfo: User) => {
                        return AuthActions.getUserInfoSuccess({ user: userInfo});
                    }),
                    catchError((error: string) => {
                        return of(AuthActions.getUserInfoReject({ errorCode: error }));
                }));
            })
        )
    });
}