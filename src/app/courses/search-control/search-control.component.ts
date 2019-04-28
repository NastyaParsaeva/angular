import { Component, OnInit } from '@angular/core';

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

  logCourseName() {
    console.log(this.courseName);
  }

}
