import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.css']
})
export class SearchControlComponent implements OnInit {

  public courseName: string;

  constructor() { }

  ngOnInit() {
  }

  filterItems() {
    console.log(this.courseName);
    this.filterCourseItems.emit(this.courseName);
  }

  @Output() filterCourseItems: EventEmitter<string> = new EventEmitter<string>();

  // deleteItem() {
  //   console.log('childDelete');
  //   this.deleteCourseItem.emit(this);
  // }

  // @Output() deleteCourseItem: EventEmitter<CourseItem> = new EventEmitter<CourseItem>();
  
}
