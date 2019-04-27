import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CourseItem } from '../course-item.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
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
    console.log('childDelete');
    this.deleteCourseItem.emit(this);
  }

  @Output() deleteCourseItem: EventEmitter<CourseItem> = new EventEmitter<CourseItem>();

}
