import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FakeLogoComponent } from './fake-logo/fake-logo.component';
import { UsersModule } from '../users/users.module';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { LoaderService } from './loader.service';

@NgModule({
  declarations: [
    HeaderComponent, 
    BreadcrumbsComponent, 
    FooterComponent, 
    FakeLogoComponent, 
    LoadingComponent
  ],
  imports: [
    CommonModule,
    UsersModule,
    RouterModule
  ],
  providers: [
    LoaderService,
],
  exports: [HeaderComponent,
    BreadcrumbsComponent, 
    FooterComponent,
    LoadingComponent],
})
export class CoreModule { }
