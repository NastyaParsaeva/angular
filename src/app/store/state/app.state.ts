import { AuthState, initialAuthState } from './auth.state';

export interface AppState {
    authentification: AuthState,
}

export const initialAppState: AppState = {
    authentification: initialAuthState,
}

export function getInitialAppState(): AppState {
    return initialAppState;
}