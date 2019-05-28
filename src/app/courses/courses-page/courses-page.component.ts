import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseItem } from '../course-item.model';
import { FilterByNamePipe } from '../filter-by-name.pipe';
import { CoursesService } from '../courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {
  
  ngOnInit() {
    
  }
  // public courseItems: CourseItem[] = [];
  // public courseIdToDelete: number;
  // public currentPage: number = 1;
  // public ItemsPerPage: number = 10;
  
  // public modal;

  // constructor(private coursesService: CoursesService, private router: Router) { }

  // ngOnInit() {
  //   this.getCourses();
  //   this.modal = document.getElementById('deleteConfirmationModal');
  // }

  // getCourses() {
  //   this.coursesService.getCourses(this.currentPage, this.ItemsPerPage).subscribe(response => {
  //     console.log(response);
  //     this.courseItems = response;
  //   });
  // }

  // showMoreCourses() {
  //   this.currentPage++;
  //   this.getCourses();
  // }

  // isCoursesEmpty() {
  //   return !(this.courseItems.length > 0);
  // }

  // showDeleteConfirmationPopup(courseItem: CourseItem): void {
  //   this.modal.style.display = "block";
  //   this.courseIdToDelete = courseItem.id;
  // }

  // closeDeleteConfirmationPopup(): void {
  //   this.modal.style.display = "none";
  //   this.courseIdToDelete = null;
  // }

  // deleteCourseItem() {
  //   this.coursesService.removeItem(this.courseIdToDelete).subscribe(response => {
  //     this.closeDeleteConfirmationPopup();
  //     this.getCourses();
  //   });    
  // }

  // editCourseItem(courseItem: CourseItem) {
  //   this.router.navigate( ['courses/', courseItem.id]);
  // }

  // filterCourseItems(queryString: string) {
  //   this.coursesService.getFilteredItems(queryString).subscribe(response => {
  //     this.courseItems = response;
  //     console.log(response);
  //   });
  // }
}
