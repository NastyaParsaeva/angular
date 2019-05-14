import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesRootPageComponent } from './courses-root-page.component';

describe('CoursesRootPageComponent', () => {
  let component: CoursesRootPageComponent;
  let fixture: ComponentFixture<CoursesRootPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesRootPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesRootPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
