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
    this.filterCourseItems.emit(this.courseName);
    // console.log(this.courseName);
  }

  @Output() filterCourseItems: EventEmitter<string> = new EventEmitter<string>();

}
