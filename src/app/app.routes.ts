import { Route } from '@angular/router';
import { CoursesPageComponent } from './courses/courses-page/courses-page.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { AddCoursePageComponent } from './add-course/add-course-page/add-course-page.component';
import { PageNotFoundPageComponent } from './page-not-found/page-not-found-page/page-not-found-page.component';
import { AuthGuard } from './guards/auth.guard';

export const ROUTES: Route[] = [
    { 
        path: 'courses', 
        component: CoursesPageComponent ,
        canActivate: [ AuthGuard ],
    },
    { 
        path: 'login', 
        component: LoginPageComponent
    },
    { 
        path: 'courses/new', 
        component: AddCoursePageComponent,
        canActivate: [ AuthGuard ],
    },
    { 
        path: '', 
        redirectTo: 'courses', 
        pathMatch: 'full' 
    },
    { 
        path: 'courses/:id', 
        component: AddCoursePageComponent, 
        data: { 'security_key': 'key_here'} ,
        canActivate: [ AuthGuard ],
    },
    { 
        path: '**', 
        component: PageNotFoundPageComponent 
    }
]