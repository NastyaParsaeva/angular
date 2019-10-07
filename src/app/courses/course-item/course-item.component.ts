import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import { CourseItem } from '../models/course-item.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseItemComponent implements OnInit, CourseItem {
  @Input() id: number;
  @Input() title: string;
  @Input() creationDate: Date;
  @Input() duration: number;
  @Input() description: string;
  @Input() isTopRated: boolean;

  constructor() { 
  }

  ngOnInit() {
  }

  handleDeleteButtonClick() {
    this.deleteCourseItem.emit(this);
  }

  handleEditButtonClick() {
    this.editCourseItem.emit(this);
  }

  @Output() deleteCourseItem: EventEmitter<CourseItem> = new EventEmitter<CourseItem>();

  @Output() editCourseItem: EventEmitter<CourseItem> = new EventEmitter<CourseItem>();
  
}
