import { Component, OnInit } from '@angular/core';
import { CourseItem } from '../models/course-item.model';
import { CoursesService } from '../services/courses.service';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { AppState } from 'src/app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { getCourseListAction } from '../actions/courses-list.actions';
import { selectCoursesList } from '../selector/courses-list.selector';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {

  public courseItems$: Observable<CourseItem[]>;
  public coursesTotalAmount: number;
  public courseIdToDelete: number;
  public modal;

  private search$: Subject<string> = new Subject();

  constructor(
    private coursesService: CoursesService, 
    private router: Router,
    private store: Store<AppState>,
  ) {}

  ngOnInit() {
    this.modal = document.getElementById('deleteConfirmationModal');
    this.store.dispatch(getCourseListAction({ searchString: '' }));
    this.courseItems$ = this.store.pipe(
      select(selectCoursesList),
      filter(courses => courses !== null)
    );
    
    this.search$.pipe(
      debounceTime(250)
    ).subscribe(query => {
      if (query.length >= 3) {
        this.store.dispatch(getCourseListAction({ searchString: query }));
      }
    })
  }

  getCurrentPageCourses(start: number, count: number) {
    this.coursesService.getCoursesForPage(start, count).subscribe(response => {
    });
  }

  switchToPage(pageParams) {
    this.getCurrentPageCourses(pageParams.start, pageParams.count);
  }

  isCoursesEmpty() {
    // return !(this.courseItems.length > 0);
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
    });    
  }

  editCourseItem(courseItem: CourseItem) {
    this.router.navigate( ['courses/', courseItem.id]);
  }

}
