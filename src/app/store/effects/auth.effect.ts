import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../shared/auth.service';
import { AuthActionTypes } from '../actions/auth.actions';
import { mergeMap, catchError, exhaustMap, map, switchMap, merge } from 'rxjs/operators';
import * as AuthActions from '../actions/auth.actions';
import { of, Observable } from 'rxjs';
import { User } from '../../core/user.model';

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
    ) {}

 
    login$ = createEffect((): Observable<any> => {
        return this.actions$.pipe(
            ofType(AuthActionTypes.login),
            switchMap((action: { username: string, password: string }) => {
                return this.authService.login(action.username, action.password).pipe(
                    map((token: string) => {
                        return AuthActions.loginSuccessAction();
                    }),
                    catchError((error: string) => {
                        return of(AuthActions.loginRejectAction({ errorCode: error }));
                }));
            }));
    });

    getUserInfo$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActionTypes.getUserInfo),
            exhaustMap((action: { token: string }) => {
                return this.authService.getUserInfo(action.token).pipe(
                    map((userInfo: User) => {
                        return AuthActions.getUserInfoSuccessAction({ user: userInfo});
                    }),
                    catchError((error: string) => {
                        return of(AuthActions.getUserInfoRejectAction({ errorCode: error }));
                }));
            })
        )
    });

    logout$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActionTypes.logout),
            mergeMap(() => {
                this.authService.logout();
                return of(AuthActions.logoutSuccessAction())
            })
        )
    });
}