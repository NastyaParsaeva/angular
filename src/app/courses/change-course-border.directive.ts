import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeCourseBorder]'
})
export class ChangeCourseBorderDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { 
    this.changeBorderColor('blue');
  }

  private defineColor(element): string {
    
    let moment = require('moment');
    console.log(moment().format());
    if (element.creationDate < Date() && element.creationDate >= moment(element.creationDate).subtract(14, 'days')) {
      return 'green';
    } else if (element.creationDate > Date()) {
      return 'blue';
    }
      return null;    
  }

  private changeBorderColor(color: string): void {
    this.renderer.setStyle(this.element.nativeElement, 'border-color', color);
  }


}
