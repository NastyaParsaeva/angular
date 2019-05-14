import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRootPageComponent } from './courses-root-page/courses-root-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CoursesRootPageComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoursesRootModule { }
