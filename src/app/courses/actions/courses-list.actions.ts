import { createAction, props } from '@ngrx/store';
import { CourseItem } from '../models/course-item.model';

export enum CoursesListActionTypes {
    getCourses = "[Courses List] Get Courses List",
    getCoursesSuccess = "[Courses List] Get Courses List Success",
    getCoursesReject = "[Courses List] Get Courses List Reject",
    
    getCourseItemById = "[Course] Get Course By Id",
    getCourseItemByIdSuccess = "[Course] Get Course By Id Success",
    getCourseItemByIdReject = "[Course] Get Course By Id Reject",

    saveCourseItem = "[Course] Save Course",
    saveCourseItemSuccess = "[Course] Save Course Success",
    saveCourseItemReject = "[Course] Save Course Reject",

    getEmptyCourseItem = "[Course] Get Empty Course Item",
}

export const getCourseListAction = createAction(
    CoursesListActionTypes.getCourses,
    props<{ searchString: string }>()
);

export const getCourseListSuccessAction = createAction(
    CoursesListActionTypes.getCoursesSuccess,
    props<{ courses: CourseItem[] }>()
)

export const getCourseListRejectAction = createAction(
    CoursesListActionTypes.getCoursesReject,
    props<{ errorType: string }>()
)

export const getCourseItemByIdAction = createAction (
    CoursesListActionTypes.getCourseItemById,
    props<{ courseId: number }>()
)

export const getCourseItemByIdSuccessAction = createAction (
    CoursesListActionTypes.getCourseItemByIdSuccess,
    props<{ course: CourseItem }>()
)

export const getCourseItemByIdRejectAction = createAction (
    CoursesListActionTypes.getCourseItemByIdReject,
    props<{ error: string }>()
)

export const saveCourseItemAction = createAction (
    CoursesListActionTypes.saveCourseItem,
    props<{ item: CourseItem, id?: number }>()
)

export const saveCourseItemSuccessAction = createAction (
    CoursesListActionTypes.saveCourseItemSuccess,
)

export const saveCourseItemRejectAction = createAction (
    CoursesListActionTypes.saveCourseItemReject,
)

export const getEmptyCourseItemAction = createAction (
    CoursesListActionTypes.getEmptyCourseItem,
)