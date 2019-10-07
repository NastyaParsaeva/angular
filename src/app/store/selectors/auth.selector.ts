import { AppState } from '../state/app.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from '../state/auth.state';

export const selectAuth = createFeatureSelector<AppState, AuthState>('authentification');

export const selectUser = createSelector(
    selectAuth,
    (state: AuthState) => {
        return state.user;
    },
);

export const selectAuthentificationStatus = createSelector(
    selectAuth,
    (state: AuthState) => {
        return state.isAuthentificated;
    },
);
