import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseItem } from '../../courses/models/course-item.model';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { filter } from 'rxjs/operators';
import { getCourseItemByIdAction,
         saveCourseItemAction,
         getEmptyCourseItemAction
} from '../../courses/actions/courses-list.actions';
import { selectCourseItem, selectSaveItemStatus } from '../../courses/selector/courses-list.selector';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent implements OnInit {
  
  public courseItem: CourseItem;
  public itemId: number;
  public isSavedSuccess: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>,
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe( (data) => {
      this.itemId = data['id'];
      if (this.itemId) {
        this.store.dispatch(getCourseItemByIdAction({ courseId: this.itemId }));
      } else {
        this.store.dispatch(getEmptyCourseItemAction());
      }
    });

    this.store.pipe(
      select(selectCourseItem),
      filter(course => !!course),
    ).subscribe((course) => {
      this.courseItem = course;
    });

    this.store.pipe(
      select(selectSaveItemStatus)
    ).subscribe(isSaved => {
      this.isSavedSuccess = isSaved;
      if (isSaved) {
        this.router.navigateByUrl('courses');
      }
    })
  }

  saveCourse() {
    if (this.itemId !== null) {
      this.store.dispatch(saveCourseItemAction({ item: this.courseItem, id: this.itemId })) 
    }
  }

  cancel() {
    this.router.navigateByUrl('courses');
  }

}
