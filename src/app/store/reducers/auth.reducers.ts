import { createReducer, on, Action } from "@ngrx/store";
import * as AuthActions from '../actions/auth.actions';
import { initialAuthState, AuthState } from '../state/auth.state';

const authReducer = createReducer(
    initialAuthState,
    on(AuthActions.loginAction, state => ({ ...state, isLoading: true })),
    on(AuthActions.loginSuccessAction, state => ({ ...state, isAuthentificated: true})),
    on(AuthActions.loginRejectAction, (state, { errorCode }) => {
        return { 
            ...state,
            isLoading: false,
            errorType: errorCode
        }
    }),
    on(AuthActions.logoutAction, state => ({
        ...state,
        isLoading: true,
    })),
    on(AuthActions.logoutSuccessAction, state => ({ 
        ...state,
        isAuthentificated: false,
        isLoading: false,
        user: null,
    })),
    on(AuthActions.getUserInfoAction, state => ({ ... state})),
    on(AuthActions.getUserInfoSuccessAction, (state, { user }) => {
        return {
            ...state,
            isLoading: false,
            isAuthentificated: true,
            user: user,
        };
    }),
    on(AuthActions.getUserInfoRejectAction, (state, { errorCode }) => {
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

