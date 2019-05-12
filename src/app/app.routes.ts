import { Route } from '@angular/router';
import { CoursesPageComponent } from './courses/courses-page/courses-page.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { AddCoursePageComponent } from './add-course/add-course-page/add-course-page.component';
import { PageNotFoundPageComponent } from './page-not-found/page-not-found-page/page-not-found-page.component';

export const ROUTES: Route[] = [
    { path: 'courses', component: CoursesPageComponent },
    { path: 'login', component: LoginPageComponent},
    { path: 'newcourse', component: AddCoursePageComponent},
    { path: '', redirectTo: 'courses', pathMatch: 'full' },
    { path: 'courses/:id', component: AddCoursePageComponent, data: { 'security_key': 'key_here'} },
    { path: '**', component: PageNotFoundPageComponent }

]