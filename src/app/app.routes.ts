import { Route } from '@angular/router';
import { CoursesPageComponent } from './courses/courses-page/courses-page.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { AddCoursePageComponent } from './add-course/add-course-page/add-course-page.component';

export const ROUTES: Route[] = [
    { path: 'courses', component: CoursesPageComponent },
    { path: 'login', component: LoginPageComponent},
    { path: 'newcourse', component: AddCoursePageComponent},
    { path: '', redirectTo: 'courses', pathMatch: 'full' }

]