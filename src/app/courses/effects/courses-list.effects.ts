import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { CoursesService } from '../services/courses.service';
import { CoursesListActionTypes } from '../actions/courses-list.actions';
import { CourseItem } from '../models/course-item.model';
import * as CoursesActions from '../actions/courses-list.actions';
import { of, merge } from 'rxjs';

@Injectable()
export class CoursesListEffects {
  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
  ) {}

  getAllCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesListActionTypes.getCourses),
      mergeMap((payload: { searchString: string }) => {
        return this.coursesService.getAllCourses(payload.searchString).pipe(
          map((courses: CourseItem[]) => {
            console.log(courses);
            return CoursesActions.getCourseListSuccessAction({ courses });
          }),
          catchError((error: string) => {
            return of(CoursesActions.getCourseListRejectAction({ errorType: error }));
          })
        )
      })
    )
  });

  getCourseItemById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesListActionTypes.getCourseItemById),
      mergeMap((payload: { courseId: number }) => {
        return this.coursesService.getItemById(payload.courseId).pipe(
          map((item: CourseItem) => {
            return CoursesActions.getCourseItemByIdSuccessAction({ course: item });
          }),
          catchError((error: string) => {
            return of(CoursesActions.getCourseItemByIdRejectAction({ error }));
          })
        )
      })
    )
  });

  saveCourseItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesListActionTypes.saveCourseItem),
      mergeMap((payload: { item: CourseItem, id?: number }) => {
        return this.chooseServiceMethod(payload.item, payload.id).pipe(
          map(() => {
            return CoursesActions.saveCourseItemSuccessAction();
          }),
          catchError(() => {
            return of(CoursesActions.saveCourseItemRejectAction())
          })
        )
      })
    )
  })

  private chooseServiceMethod (item: CourseItem, itemId: number = null) {
    if (itemId) {
      return this.coursesService.updateCourse(item);
    } else {
      return this.coursesService.createCourse(item);
    }
  }
}