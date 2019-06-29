import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CourseItem } from '../course-item.model';
import { FilterByNamePipe } from '../filter-by-name.pipe';
import { CoursesService } from '../courses.service';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {
  
  // @ViewChild('searchLine') search;

  public courseItems: CourseItem[] = [];

  public coursesTotalAmount: number;  

  public courseIdToDelete: number;
  
  public modal;

  private search$: Subject<string> = new Subject();

  constructor(
    private coursesService: CoursesService, 
    private router: Router
  ) {}

  ngOnInit() {
    this.getCoursesAmount();
    this.modal = document.getElementById('deleteConfirmationModal');
    this.search$.pipe(
      debounceTime(250)
    ).subscribe(query => {
      if (query.length >= 3) {
        console.log(query);
        this.filterCourseItems(query);
      }
    })
  }

  getCoursesAmount() {
    this.coursesService.getCoursesAmount().subscribe(data => {
      this.coursesTotalAmount = data;
      this.getCurrentPageCourses(0, 10);
    });
  }

  getCurrentPageCourses(start: number, count: number) {
    this.coursesService.getCoursesForPage(start, count).subscribe(response => {
      console.log(response);
      this.courseItems = response;
    });
  }

  switchToPage(pageParams) {
    console.log(pageParams);
    this.getCurrentPageCourses(pageParams.start, pageParams.count);
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
    this.coursesService.removeItem(this.courseIdToDelete).subscribe(() => {
      this.closeDeleteConfirmationPopup();
      this.getCoursesAmount();
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

}
