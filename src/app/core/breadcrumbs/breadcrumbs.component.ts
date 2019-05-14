import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, PRIMARY_OUTLET, ActivatedRouteSnapshot } from '@angular/router'
import { MyBreadcrumb } from '../breadcrumb.model';
import { filter } from 'rxjs/operators';
import { CoursesService } from 'src/app/courses/courses.service';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  
  public breadcrumbs: Array<MyBreadcrumb> = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private coursesService: CoursesService) { }

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
    let children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (let child of children) {
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      let routeURL: string = child.snapshot.url.map(segment => segment.path).join("/");
      url += `/${routeURL}`;
      // child.snapshot
      breadcrumbs.push(this.createBreadcrumbItem(child.snapshot, url));

      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
  }

  createBreadcrumbItem(route: ActivatedRouteSnapshot, url: string) {
    let label;
    if (route.data['breadcrumb'] === 'compId') {
      label = this.coursesService.getItemById(route.params.id).title;
    } else {
      label = route.data['breadcrumb'];
    }
    return {
      label: label,
      url: url
    };
  }

}
