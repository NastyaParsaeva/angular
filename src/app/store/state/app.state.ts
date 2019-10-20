import { AuthState, initialAuthState } from './auth.state';
import { CoursesState, initialCoursesState } from 'src/app/courses/state/courses.state';

export interface AppState {
    authentification: AuthState,
    courses: CoursesState,
}

export const initialAppState: AppState = {
    authentification: initialAuthState,
    courses: initialCoursesState,
}

export function getInitialAppState(): AppState {
    return initialAppState;
}