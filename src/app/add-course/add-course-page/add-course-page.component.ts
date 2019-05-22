import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseItem } from 'src/app/courses/course-item.model';
import { CoursesService } from 'src/app/courses/courses.service';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent implements OnInit {
  public courseItem: CourseItem
  public routeParams: any = {}

  constructor(private router: Router, private route: ActivatedRoute, private coursesService: CoursesService) { }

  ngOnInit() {
    this.route.params.subscribe( (data) => {
      this.routeParams.id = data['id']
    })
    this.coursesService.getItemById(this.routeParams.id).subscribe(response => {
      console.log(response);
      this.courseItem = response;
    });
  }

  saveCourse() {
    console.log('course saved');
    this.coursesService.updateItem();
    this.router.navigateByUrl('courses');

  }

  cancel() {
    console.log('action canceled');
    this.router.navigateByUrl('courses');
  }

}
