import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.css']
})
export class LoadMoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loadMoreCourses() {
    console.log('load more');
    this.showMoreCourses.emit(this);
  }

  @Output() showMoreCourses: EventEmitter = new EventEmitter();
}
