import { Pipe, PipeTransform } from '@angular/core';
import { CourseItem } from './course-item.model';

@Pipe({
  name: 'convertCourseItemToServiceCourse'
})
export class ConvertCourseItemToServiceCoursePipe implements PipeTransform {

  transform(item: CourseItem): any {
    return {
      name: item.title,
      date: item.creationDate,
      length: item.duration * 1,
      description: item.description,
      isTopRated: item.isTopRated,
      authors: null
    }
  }

}
