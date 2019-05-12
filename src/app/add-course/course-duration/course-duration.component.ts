import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-duration',
  templateUrl: './course-duration.component.html',
  styleUrls: ['./course-duration.component.css']
})
export class CourseDurationComponent implements OnInit {

  @Input() duration: number
  
  constructor() { }

  ngOnInit() {
  }

}
