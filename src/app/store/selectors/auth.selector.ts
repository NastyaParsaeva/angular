import { AppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { AuthState } from '../state/auth.state';

export const selectAuthState = (state: AppState) => state.authentification;

export const selectUser = createSelector(
    selectAuthState,
    (authState: AuthState) => {
        return authState.user;
    }
);
export const selectAuthentification = createSelector(
    selectAuthState,
    (authState: AuthState) => {
        return authState.isAuthentificated;
    }
)