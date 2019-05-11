import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  OpenAddCoursePage() {
    this.router.navigateByUrl('/newcourse');
  }
}
