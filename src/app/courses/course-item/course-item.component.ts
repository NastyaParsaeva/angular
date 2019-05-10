import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import { CourseItem } from '../course-item.model';

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

  deleteItem() {
    this.deleteCourseItem.emit(this);
  }

  @Output() deleteCourseItem: EventEmitter<CourseItem> = new EventEmitter<CourseItem>();
  
}
