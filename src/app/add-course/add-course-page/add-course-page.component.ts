import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  saveCourse() {
    console.log('course saved');
  }

  cancel() {
    console.log('action canceled');
  }

}
