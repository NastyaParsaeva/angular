import { Component, OnInit } from '@angular/core';
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
  public filteredItems: CourseItem[];
  public courseIdToDelete: number;
  
  public modal;

  constructor(private coursesService: CoursesService, private router: Router) { 
    this.courseItems = coursesService.getList();
  }

  ngOnInit() {
    this.filteredItems = [...this.courseItems];
    this.modal = document.getElementById('deleteConfirmationModal');
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
    this.filteredItems = this.coursesService.getList();
    this.closeDeleteConfirmationPopup();
  }

  editCourseItem(courseItem: CourseItem) {
    console.log('edit me');
    this.router.navigate( ['courses/', courseItem.id]);
  }

  filterCourseItems(str: string) {
    this.filteredItems = new FilterByNamePipe().transform(this.courseItems, str);
  }
}
