import { createReducer, on, Action } from "@ngrx/store";
import * as AuthActions from '../actions/auth.actions';
import { initialAuthState, AuthState } from '../state/auth.state';

const authReducer = createReducer(
    initialAuthState,
    on(AuthActions.login, state => ({ ...state, isLoading: true })),
    on(AuthActions.loginSuccess, state => ({ ...state, isAuthentificated: true})),
    on(AuthActions.loginReject, (state, { errorCode }) => {
        console.log(errorCode);
        return { 
            ...state,
            isLoading: false,
            errorType: errorCode
        }
    }),
    on(AuthActions.logout, state => ({ ...state })),
    on(AuthActions.getUserInfo, state => ({ ... state})),
    on(AuthActions.getUserInfoSuccess, (state, { user }) => {
        console.log(user);
        return {
            ...state,
            isLoading: false,
            isAuthentificated: true,
            user: user,
        };
    }),
    on(AuthActions.getUserInfoReject, (state, { errorCode }) => {
        console.log(errorCode);
        return {
            ...state,
            isLoading: false,
            errorType: errorCode,
        }
    })
)

export function reducer(state: AuthState | undefined, action: Action) {
    return authReducer(state, action);
}

