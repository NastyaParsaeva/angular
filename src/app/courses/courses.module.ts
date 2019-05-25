import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { SearchControlComponent } from './search-control/search-control.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { ChangeCourseBorderDirective } from './change-course-border.directive';
import { HighlightTopRatedDirective } from './highlight-top-rated.directive';
import { StringifyDurationPipe } from './stringify-duration.pipe';
import { OrderByPipe } from './order-by.pipe';
import { FilterByNamePipe } from './filter-by-name.pipe';
import { RouterModule } from '@angular/router';
import { ConvertCourseItemToServiceCoursePipe } from './convert-course-item-to-service-course.pipe';
import { ConvertServiceCourseToCourseItemPipe } from './convert-service-course-to-course-item.pipe';

@NgModule({
  declarations: [
    CoursesPageComponent, 
    CourseItemComponent, 
    SearchControlComponent, 
    NewCourseComponent, 
    LoadMoreComponent, 
    ChangeCourseBorderDirective, 
    HighlightTopRatedDirective, 
    StringifyDurationPipe, 
    OrderByPipe, 
    FilterByNamePipe, 
    ConvertCourseItemToServiceCoursePipe, ConvertServiceCourseToCourseItemPipe
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  providers: [ConvertCourseItemToServiceCoursePipe, ConvertServiceCourseToCourseItemPipe],
  exports: [
    CoursesPageComponent
  ]
})
export class CoursesModule { }
