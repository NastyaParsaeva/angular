import { Injectable } from '@angular/core';
import { CourseItemComponent } from './course-item/course-item.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CourseItem } from './course-item.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConvertCourseItemToServiceCoursePipe } from './convert-course-item-to-service-course.pipe';
import { ConvertServiceCourseToCourseItemPipe } from './convert-service-course-to-course-item.pipe';

const BASE_URL = 'http://localhost:3004/courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  constructor(private http: HttpClient, 
    private courseItemToServiceCourseConverter: ConvertCourseItemToServiceCoursePipe,
    private serviceCourseToCourseItemConverter: ConvertServiceCourseToCourseItemPipe) { }


  getCoursesForPage(firstCourseNumber: number, lastCourseNumber: number): Observable<CourseItem[]> {
    return null;
  }
  getAllCourses(): Observable<CourseItem[]> {
    return this.http.get<any>(BASE_URL).pipe(map(data => {
      return data.map(item => {
        return this.serviceCourseToCourseItemConverter.transform(item);
      });
    }));
  }

  getItemById(id) {
    return this.http.get<any>(`${ BASE_URL }/${id}`).pipe(map(item => {
      return this.serviceCourseToCourseItemConverter.transform(item);
    }));
  }

  getFilteredItems(textFragment: string): Observable<CourseItem[]> {
    return this.http.get<CourseItem[]>(BASE_URL, {params: {textFragment}}).pipe(map(data => {
      return data.map(item => {
        return this.serviceCourseToCourseItemConverter.transform(item);
      });
    }));
  }

  createCourse(item) {
    const newCourseItem = this.courseItemToServiceCourseConverter.transform(item);
    console.log(newCourseItem);
    return this.http.post(BASE_URL, newCourseItem);
  }

  updateCourse(item) {
    const newCourseItem = this.courseItemToServiceCourseConverter.transform(item);
    console.log(newCourseItem);
    return this.http.put(`${ BASE_URL }/${item.id}`, newCourseItem);
  }

  removeItem(courseId: number): any {
    let temp = null;
    console.log('remove service' + courseId);
    return this.http.delete<CourseItem>(`${BASE_URL}/${courseId}`);
  }
}