import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightTopRated]'
})
export class HighlightTopRatedDirective {

  @Input() set appHighlightTopRated(isTopRated) {
    if (isTopRated) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  constructor(private templateRef: TemplateRef<any>,
  private viewContainer: ViewContainerRef) { }

}
