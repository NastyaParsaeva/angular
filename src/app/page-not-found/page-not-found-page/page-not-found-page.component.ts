import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-page-not-found-page',
  templateUrl: './page-not-found-page.component.html',
  styleUrls: ['./page-not-found-page.component.css'],

})
export class PageNotFoundPageComponent implements OnInit {

  constructor(private router: Router) { 
    this.router.events.subscribe((event: RouterEvent) => {

    })
  }

  ngOnInit() {
  }

}
