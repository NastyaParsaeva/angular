import { Component, OnInit } from '@angular/core';
import { CourseItem } from '../course-item.model';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {

  public courseItems: CourseItem[];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.courseItems = this.coursesService.getCourses();
  }

  deleteCourseItem(courseItem) {
    console.log(courseItem.id);
  }
}
