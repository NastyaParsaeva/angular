import { Pipe, PipeTransform } from '@angular/core';
import { CourseItem } from '../course-item.model';

@Pipe({
  name: 'convertServiceCourseToCourseItem'
})
export class ConvertServiceCourseToCourseItemPipe implements PipeTransform {

  transform(serviceCourseItem): CourseItem {
    return {
      id: serviceCourseItem.id,
      title: serviceCourseItem.name,
      creationDate: serviceCourseItem.date, 
      duration: serviceCourseItem.length,
      description: serviceCourseItem.description,
      isTopRated: serviceCourseItem.isTopRated
    }
  }
}
