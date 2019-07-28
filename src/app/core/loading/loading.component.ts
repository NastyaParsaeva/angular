import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { CoursesService } from 'src/app/courses/courses.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(private authService: AuthService,
    private coursesService: CoursesService) { }

  ngOnInit() {
  }

  showLoader() {
    document.getElementById('entire-overlay').style.display = 'flex';
    document.getElementById('main-overlay').style.display = 'flex';
  }

  hideSpinner() {
    document.getElementById('entire-overlay').style.display = 'none';    
    document.getElementById('main-overlay').style.display = 'none';    
  }

}
