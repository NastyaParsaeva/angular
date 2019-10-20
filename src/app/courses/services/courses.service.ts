import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseItem } from '../models/course-item.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConvertCourseItemToServiceCoursePipe } from '../pipes/convert-course-item-to-service-course.pipe';
import { ConvertServiceCourseToCourseItemPipe } from '../pipes/convert-service-course-to-course-item.pipe';

const BASE_URL = 'http://localhost:3004/courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  constructor(private http: HttpClient, 
    private courseItemToServiceCourseConverter: ConvertCourseItemToServiceCoursePipe,
    private serviceCourseToCourseItemConverter: ConvertServiceCourseToCourseItemPipe) 
  { }


  getCoursesAmount() {
    return this.http.get<number>(`${BASE_URL}/length`);
  }

  getCoursesForPage(startNumber: number, count: number): Observable<CourseItem[]> {
    console.log(`${BASE_URL}?start=${ startNumber }&count=${ count }`);
    return this.http.get<any>(`${BASE_URL}?start=${ startNumber }&count=${ count }`).pipe(map(data => {
      return data.map(item => {
        return this.serviceCourseToCourseItemConverter.transform(item);
      })
    }))
  }

  getAllCourses(searchString: string): Observable<CourseItem[]> {
    if (searchString === '') {
      return this.http.get<CourseItem[]>(BASE_URL).pipe(map(data => {
        return data.map(item => {
          return this.serviceCourseToCourseItemConverter.transform(item);
        });
      }));
    } else {
      return this.http.get<CourseItem[]>(BASE_URL, {params: {searchString}}).pipe(map(data => {
        return data.map(item => {
          return this.serviceCourseToCourseItemConverter.transform(item);
        });
      }));
    }
  }

  getItemById(id) {
    return this.http.get<any>(`${ BASE_URL }/${id}`).pipe(map(item => {
      return this.serviceCourseToCourseItemConverter.transform(item);
    }));
  }

  // getFilteredItems(textFragment: string): Observable<CourseItem[]> {
    
  // }

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