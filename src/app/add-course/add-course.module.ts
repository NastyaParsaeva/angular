import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { CourseDescriptionComponent } from './course-description/course-description.component';
import { CourseAuthorsComponent } from './course-authors/course-authors.component';
import { CourseDurationComponent } from './course-duration/course-duration.component';

@NgModule({
  declarations: [AddCoursePageComponent, CourseDescriptionComponent, CourseAuthorsComponent, CourseDurationComponent],
  imports: [
    CommonModule
  ]
})
export class AddCourseModule { }
