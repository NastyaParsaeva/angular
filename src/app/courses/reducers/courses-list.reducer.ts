import { createReducer, on, Action } from '@ngrx/store';
import { initialCoursesState, CoursesState } from '../state/courses.state';
import * as CoursesListActions from '../actions/courses-list.actions'


const coursesListReducer = createReducer(
    initialCoursesState,
    on(CoursesListActions.getCourseListAction, state => ({ ...state, isListLoading: true })),
    on(CoursesListActions.getCourseListSuccessAction, (state, { courses }) => ({
        ...state,
        isListLoading: false,
        courses: courses,
    })),
    on(CoursesListActions.getCourseListRejectAction, (state, { errorType }) => {
        return { 
            ...state,
            isListLoading: false,
            isListFailed: false,
            listError: errorType
        };
    }),
    on(CoursesListActions.getCourseItemByIdAction, state => ({ 
        ...state,
        isItemLoading: true,
        isItemFailed: false,
        isItemSaveSuccess: false,
        isItemSaveFailed: false,
    })),
    on(CoursesListActions.getCourseItemByIdSuccessAction, (state, { course }) => ({
        ...state,
        isItemLoading: false,
        item: course,
    })),
    on(CoursesListActions.getCourseItemByIdRejectAction, (state, { error }) => {
        return {
            ...state,
            isItemLoading: false,
            isItemFailed: true,
        }
    }),
    on(CoursesListActions.saveCourseItemSuccessAction, state => ({ ...state, isItemSaveSuccess: true })),
    on(CoursesListActions.getEmptyCourseItemAction, state => {
        return {
            ...state,
            item: {...emptyCourseItem},
            isItemLoading: false,
            isItemFailed: false,

            isItemSaveSuccess: false,
            isItemSaveFailed: false,
        }
    })
);
export function reducer(state: CoursesState | undefined, action: Action) {
    return coursesListReducer(state, action);
}

const emptyCourseItem = {
    id: null,
    title: '',
    creationDate: new Date(),
    duration: null,
    description: '',
    isTopRated: false,
}