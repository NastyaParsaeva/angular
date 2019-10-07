import { User } from 'src/app/core/user.model';

export interface AuthState {
    user: User | null,
    isLoading: boolean,
    errorType: string,
    isAuthentificated: boolean,
}

export const initialAuthState: AuthState = {
    user: null,
    isLoading: false,
    errorType: '',
    isAuthentificated: false,
}