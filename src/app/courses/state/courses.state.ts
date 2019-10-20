import { CourseItem } from '../models/course-item.model';

export interface CoursesState {
    courses: CourseItem[],
    isListLoading: boolean,
    isListFailed: boolean,

    item: CourseItem,
    isItemLoading: boolean,
    isItemFailed: boolean,
    isItemSaveSuccess: boolean,
    isItemSaveFailed: boolean,
}

export const initialCoursesState: CoursesState = {
    courses: [],
    isListLoading: false,
    isListFailed: false,

    item: null,
    isItemLoading: false,
    isItemFailed: false,

    isItemSaveSuccess: false,
    isItemSaveFailed: false,
}