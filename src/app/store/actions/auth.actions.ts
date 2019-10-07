import { createAction, props } from '@ngrx/store';
import { User } from '../../core/user.model';

export enum AuthActionTypes {
    login = "[Auth] Login",
    loginSuccess = "[Auth] Login Success",
    loginReject = "[Auth] Login Reject",
    logout = "[Auth] Logout",
    logoutSuccess = "[Auth] Logout Success",
    getUserInfo = "[Auth] Get User Info",
    getUserInfoSuccess = "[Auth] Get User Info Success",
    getUserInfoReject = "[Auth] Get User Info Reject",
}

export const loginAction = createAction(
    AuthActionTypes.login,
    props<{ username: string; password: string }>()
);

export const loginSuccessAction = createAction(
    AuthActionTypes.loginSuccess,
);

export const loginRejectAction = createAction(
    AuthActionTypes.loginReject,
    props<{ errorCode: string }>()
)

export const logoutAction = createAction(
    AuthActionTypes.logout
);

export const logoutSuccessAction = createAction(
    AuthActionTypes.logoutSuccess
)

export const getUserInfoAction = createAction(
    AuthActionTypes.getUserInfo,
    props<{ token?: string }>(),
)

export const getUserInfoSuccessAction = createAction(
    AuthActionTypes.getUserInfoSuccess,
    props<{ user: User }>(),
)

export const getUserInfoRejectAction = createAction(
    AuthActionTypes.getUserInfoReject,
    props<{ errorCode: string }>(),
)