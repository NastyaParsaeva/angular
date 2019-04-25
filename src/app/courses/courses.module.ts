import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { SearchControlComponent } from './search-control/search-control.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ChangeCourseBorderDirective } from './change-course-border.directive';

@NgModule({
  declarations: [BreadcrumbsComponent, CoursesPageComponent, CourseItemComponent, SearchControlComponent, NewCourseComponent, LoadMoreComponent, ChangeCourseBorderDirective],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    CoursesPageComponent
  ]
})
export class CoursesModule { }
