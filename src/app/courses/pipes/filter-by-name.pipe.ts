import { Pipe, PipeTransform } from '@angular/core';
import { CourseItem } from '../models/course-item.model';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(courseItems: CourseItem[], name?: string): CourseItem[] {
    if (!name) {
      return courseItems;
    } else {
      return courseItems.filter(item => {
        return item.title.toLowerCase().includes(name.trim().toLowerCase());
      })
    }    
  }
}
