import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { AddCourseModule } from './add-course/add-course.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { CoursesPageContainerComponent } from './courses-page-container/courses-page-container.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesPageContainerComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    UsersModule,
    CoursesModule,
    LoginModule,
    AddCourseModule,
    PageNotFoundModule,
    RouterModule,
    RouterModule.forRoot(ROUTES),
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
