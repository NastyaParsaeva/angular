import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  public isShown: boolean = false;
  constructor(private loadingService: LoadingService) {
    this.loadingService.observer.subscribe(value => {
      this.isShown = value;
    })
  }

  ngOnInit() {
  }

}
