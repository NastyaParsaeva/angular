import { Component, OnInit, Input } from '@angular/core';
import { CourseItem } from '../course-item.model';
import { CoursesService } from '../courses.service';
import { Router } from '@angular/router';
import { PaginationService } from '../pagination.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  public courseItems: CourseItem[] = [];
  public courseIdToDelete: number;
  public currentPage: number = 1;
  public ItemsPerPage: number = 10;

  // private allItems: any[];
  public pager: any = {};
  public pagedItems: CourseItem[] = [];
  
  public modal;

  constructor(
    private coursesService: CoursesService, 
    private router: Router, 
    private pagerService: PaginationService
  ) { }

  ngOnInit() {
          // get dummy data
    this.coursesService.getAllCourses().subscribe(data => {
      // set items to json response
      this.courseItems = data;
      // initialize to page 1
      this.setPage(1);
    });
    // this.getCourses();
    this.modal = document.getElementById('deleteConfirmationModal');
  }

  getCourses() {
    this.coursesService.getAllCourses().subscribe(response => {
      console.log(response);
      this.courseItems = response;
    });
  }

  showMoreCourses() {
    this.currentPage++;
    this.getCourses();
  }

  isCoursesEmpty() {
    return !(this.courseItems.length > 0);
  }

  showDeleteConfirmationPopup(courseItem: CourseItem): void {
    this.modal.style.display = "block";
    this.courseIdToDelete = courseItem.id;
  }

  closeDeleteConfirmationPopup(): void {
    this.modal.style.display = "none";
    this.courseIdToDelete = null;
  }

  deleteCourseItem() {
    this.coursesService.removeItem(this.courseIdToDelete).subscribe(response => {
      this.closeDeleteConfirmationPopup();
      this.getCourses();
    });    
  }

  editCourseItem(courseItem: CourseItem) {
    this.router.navigate( ['courses/', courseItem.id]);
  }

  filterCourseItems(queryString: string) {
    this.coursesService.getFilteredItems(queryString).subscribe(response => {
      this.courseItems = response;
      console.log(response);
    });
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.courseItems.length, page);
    console.log(this.pager)

    // get current page of items
    this.pagedItems = this.courseItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
