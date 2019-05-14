import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, PRIMARY_OUTLET } from '@angular/router'
import { MyBreadcrumb } from '../breadcrumb.model';
// import "rxjs/add/operator/filter";
// import { filter } from 'rxjs/add/operator';
import { filter, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  
  public breadcrumbs: Array<MyBreadcrumb> = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      let root: ActivatedRoute = this.activatedRoute.root;
      this.breadcrumbs = this.getBreadcrumbs(root);
      console.log(this.breadcrumbs);
  });
  }

  private getBreadcrumbs(route: ActivatedRoute, url: string="", breadcrumbs: MyBreadcrumb[]=[]): MyBreadcrumb[] {
    const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";

    console.log( this.activatedRoute.children);
    //get the child routes
    let children: ActivatedRoute[] = route.children;
    console.log(children.length);

    //return if there are no more children
    if (children.length === 0) {
      return breadcrumbs;
    }

    //iterate over each children
    for (let child of children) {
      console.log(child);
      //verify primary route
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      //verify the custom data property "breadcrumb" is specified on the route
      console.log(child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB));
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      //get the route's URL segment
      let routeURL: string = child.snapshot.url.map(segment => segment.path).join("/");
      console.log(child.snapshot.url)
      //append route URL to URL
      url += `${routeURL}`;
      console.log(url);

      //add breadcrumb
      let breadcrumb: MyBreadcrumb = {
        label: child.snapshot.data['breadcrumb'],
        // params: child.snapshot.params,
        url: url
      };
      console.log(breadcrumb);
      breadcrumbs.push(breadcrumb);

      //recursive
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
  }

}
