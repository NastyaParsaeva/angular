import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/core/user.model';

export enum AuthActionTypes {
    login = "[Auth] Login",
    loginSuccess = "[Auth] Login Success",
    loginReject = "[Auth] Login Reject",
    logout = "[Auth] Logout",
    getUserInfo = "[Auth] Get User Info",
    getUserInfoSuccess = "[Auth] Get User Info Success",
    getUserInfoReject = "[Auth] Get User Info Reject",
}

export const login = createAction(
    AuthActionTypes.login,
    props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
    AuthActionTypes.loginSuccess,
);

export const loginReject = createAction(
    AuthActionTypes.loginReject,
    props<{ errorCode: string }>()
)

export const logout = createAction(
    AuthActionTypes.logout
);

export const getUserInfo = createAction(
    AuthActionTypes.getUserInfo,
    props<{ token: string }>(),
)

export const getUserInfoSuccess = createAction(
    AuthActionTypes.getUserInfoSuccess,
    props<{ user: User }>(),
)

export const getUserInfoReject = createAction(
    AuthActionTypes.getUserInfoReject,
    props<{ errorCode: string }>(),
)