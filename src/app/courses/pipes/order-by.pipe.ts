import { Pipe, PipeTransform } from '@angular/core';
import { CourseItem } from '../course-item.model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courseItems: CourseItem[], _isAsc: boolean = false): CourseItem[] {
    return courseItems.sort((_a, _b) => {
      if (_a.creationDate > _b.creationDate) {
        return 1;
      } else if (_a.creationDate < _b.creationDate) {
        return -1;
      }
      return 0;
    })
    
  }

}
