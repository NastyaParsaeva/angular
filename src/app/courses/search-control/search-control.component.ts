import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.css']
})
export class SearchControlComponent implements OnInit {

  @Input() search: Subject<string>;
  public courseName: string = '';

  constructor() { }

  ngOnInit() {
  }

  filterItems() {
    this.filterCourseItems.emit(this.courseName);
  }

  onSearchQueryChange(event) {
    console.log('onSearchQueryChange');
    console.log(event);
    this.courseName += event.key;
    this.search.next(this.courseName);
    this.filterCourseItems.emit(this.courseName);
  }

  @Output() filterCourseItems: EventEmitter<string> = new EventEmitter<string>();

}
