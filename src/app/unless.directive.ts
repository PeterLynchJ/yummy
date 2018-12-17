import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.tmpRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(private tmpRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}