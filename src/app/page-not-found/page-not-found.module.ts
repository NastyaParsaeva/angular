import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundPageComponent } from './page-not-found-page/page-not-found-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PageNotFoundPageComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  
})
export class PageNotFoundModule { }
