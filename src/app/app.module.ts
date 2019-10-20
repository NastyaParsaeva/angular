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
import { CoursesRootModule } from './courses-root/courses-root.module';
import { StoreModule } from '@ngrx/store';
import * as authReducer from './store/reducers/auth.reducers';
import * as coursesListReducer from './courses/reducers/courses-list.reducer'
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CoursesListEffects } from './courses/effects/courses-list.effects';

@NgModule({
  declarations: [
    AppComponent
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
    CoursesRootModule,
    RouterModule.forRoot(ROUTES),
    SharedModule.forRoot(),
    StoreModule.forRoot({ 
      authentification: authReducer.reducer,
      courses: coursesListReducer.reducer,
    }),
    EffectsModule.forRoot([
      AuthEffects,
      CoursesListEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
