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
  
  public courseItems: CourseItem[];
  public courseIdToDelete: number;
  // public 
  public currentPage: number;
  
  public modal;

  constructor(private coursesService: CoursesService, private router: Router) { }

  ngOnInit() {
    this.getCourses();
    this.modal = document.getElementById('deleteConfirmationModal');
  }

  getCourses() {
    this.coursesService.getList().subscribe(response => {
      console.log(response);
      this.courseItems = response;
    });
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
    this.coursesService.removeItem(this.courseIdToDelete);
    this.closeDeleteConfirmationPopup();
  }

  editCourseItem(courseItem: CourseItem) {
    this.router.navigate( ['courses/', courseItem.id]);
  }

  filterCourseItems(queryString: string) {
    this.coursesService.getFilteredItems(queryString).subscribe(response => {
      this.courseItems = response;
      console.log(response);
    })
    // this.filteredItems = new FilterByNamePipe().transform(this.courseItems, str);
  }

  // ngOnDestroy(): void {
  //   throw new Error("Method not implemented.");
  // }
}
