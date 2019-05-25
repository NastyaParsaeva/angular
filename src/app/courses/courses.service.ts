import { Injectable } from '@angular/core';
import { CourseItemComponent } from './course-item/course-item.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CourseItem } from './course-item.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConvertCourseItemToServiceCoursePipe } from './convert-course-item-to-service-course.pipe';

const BASE_URL = 'http://localhost:3004/courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  constructor(private http: HttpClient, 
    private courseItemToServiceCourseConverter: ConvertCourseItemToServiceCoursePipe) { }

  getCourses(pageNumber: number = null, itemsPerPage: number = null): Observable<CourseItem[]> {
    return this.http.get<any>(BASE_URL).pipe(map(data => {
      let coursesList = data;
      return coursesList.map(item => {
        return {
          id: item.id,
          title: item.name,
          creationDate: item.date, 
          duration: item.length,
          description: item.description,
          isTopRated: item.isTopRated
        };
      });
    }));
  }

  getItemById(id) {
    return this.http.get<any>(`${ BASE_URL }/${id}`).pipe(map(item => {
      return {
        id: item.id,
        title: item.name,
        creationDate: item.date, 
        duration: item.length,
        description: item.description,
        isTopRated: item.isTopRated,
        authors: item.authors
      }
    }));
  }

  getFilteredItems(textFragment: string): Observable<CourseItem[]> {
    return this.http.get<CourseItem[]>(BASE_URL, {params: {textFragment}});
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