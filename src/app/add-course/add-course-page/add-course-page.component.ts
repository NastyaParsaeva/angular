import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { CourseItem } from 'src/app/courses/course-item.model';
import { CoursesService } from 'src/app/courses/courses.service';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent implements OnInit {
  
  @Input() courseItem: CourseItem = {
    id: null,
    title: '',
    creationDate: new Date(),
    duration: null,
    description: '',
    isTopRated: false,
  };

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
    if (this.courseItem.id !== null) {
      this.coursesService.updateCourse(this.courseItem).subscribe(response => {
        console.log(response);
        this.router.navigateByUrl('courses');
      });
    } else {
      this.coursesService.createCourse(this.courseItem).subscribe(response => {
        console.log(response);
        this.router.navigateByUrl('courses');
      });
    }
    
  }

  cancel() {
    console.log('action canceled');
    this.router.navigateByUrl('courses');
  }

}
