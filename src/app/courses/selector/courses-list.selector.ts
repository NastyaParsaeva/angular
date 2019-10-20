import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { CoursesState } from '../state/courses.state';

export const selectCourses = createFeatureSelector<AppState, CoursesState>('courses');

export const selectCoursesList = createSelector(
    selectCourses,
    (state: CoursesState) => {
        return state.courses;
    },
);

export const selectCourseItem = createSelector(
    selectCourses,
    (state: CoursesState) => {
        return state.item;
    }
)

export const selectSaveItemStatus = createSelector(
    selectCourses,
    (state: CoursesState) => {
        return state.isItemSaveSuccess;
    }
)