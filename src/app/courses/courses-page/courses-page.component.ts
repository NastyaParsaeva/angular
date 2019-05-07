import { Component, OnInit } from '@angular/core';
import { CourseItem } from '../course-item.model';
import { FilterByNamePipe } from '../filter-by-name.pipe';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {

  public courseItems: CourseItem[];
  public filteredItems: CourseItem[];

  constructor(private coursesService: CoursesService) { 
    this.courseItems = coursesService.getList();
  }

  ngOnInit() {
    this.filteredItems = [...this.courseItems];
  }

  isCoursesEmpty() {
    return !(this.courseItems.length > 0);
  }

  deleteCourseItem(courseItem: CourseItem) {
    console.log(courseItem.id);
    this.coursesService.removeItem(courseItem.id);
    this.filteredItems = this.coursesService.getList();
  }

  filterCourseItems(str: string) {
    console.log(str);
    this.filteredItems = new FilterByNamePipe().transform(this.courseItems, str);
  }
}
