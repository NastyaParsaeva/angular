import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FakeLogoComponent } from './fake-logo/fake-logo.component';
import { UsersModule } from '../users/users.module';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, BreadcrumbsComponent, FooterComponent, FakeLogoComponent],
  imports: [
    CommonModule,
    UsersModule,
    RouterModule
  ],
  exports: [HeaderComponent, BreadcrumbsComponent, FooterComponent],
})
export class CoreModule { }
