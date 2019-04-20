import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FakeLogoComponent } from './fake-logo/fake-logo.component';
import { UsersModule } from '../users/users.module';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, FakeLogoComponent, BreadcrumbsComponent],
  imports: [
    CommonModule,
    UsersModule
  ],
  exports: [HeaderComponent, FooterComponent, BreadcrumbsComponent],
})
export class CoreModule { }
