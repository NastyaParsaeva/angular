import { Directive, ElementRef, Renderer2, Input, AfterViewInit } from '@angular/core';
import * as moment from 'moment';

@Directive({
  selector: '[appChangeCourseBorder]'
})
export class ChangeCourseBorderDirective implements AfterViewInit{
  
  ngAfterViewInit(): void {
    this.changeBorderColor();
  }

  constructor(private element: ElementRef, private renderer: Renderer2) { 
  }
  
  @Input('appChangeCourseBorder') date: Date;
  
  private defineColor(): string {
    if ((this.date < (new Date())) && (moment(this.date) >= moment().subtract(14, 'days'))) {
      return 'green';
    } else if (this.date > (new Date())) {
      return 'red';
    }
      return null;    
  }

  private changeBorderColor(): void {
    this.renderer.setStyle(this.element.nativeElement, 'border-color', this.defineColor());
  }


}
