import { Component, OnInit } from '@angular/core';
import { CourseItem } from '../course-item.model';
import { FilterByNamePipe } from '../filter-by-name.pipe';
import { CoursesService } from '../courses.service';
import * as angular from 'angular';
// import * as angular from 'angular';
// import * as angular from "angular";

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {

  public courseItems: CourseItem[];
  public filteredItems: CourseItem[];
  
  public modal;

  constructor(private coursesService: CoursesService) { 
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
    console.log(courseItem.id);
    this.modal.style.display = "block";
  }

  closeDeleteConfirmationPopup(): void {
    this.modal.style.display = "none";
  }

  deleteCourseItem(courseItem: CourseItem) {
    this.coursesService.removeItem(courseItem.id);
    this.filteredItems = this.coursesService.getList();
  }

  filterCourseItems(str: string) {
    console.log(str);
    this.filteredItems = new FilterByNamePipe().transform(this.courseItems, str);
  }
}
