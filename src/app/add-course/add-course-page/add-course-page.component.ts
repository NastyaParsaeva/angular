import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  saveCourse() {
    console.log('course saved');
    this.router.navigateByUrl('courses');
  }

  cancel() {
    console.log('action canceled');
    this.router.navigateByUrl('courses');
  }

}
