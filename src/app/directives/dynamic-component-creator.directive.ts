import { Directive, Input, ViewContainerRef, inject } from '@angular/core';
import { DynamicComponent } from '../models/dynamic-component';

@Directive({
  selector: '[appDynamicComponent]',
  standalone: true
})
export class DynamicComponentDirective {
  @Input() component!: DynamicComponent;
  private vcr = inject(ViewContainerRef)

  ngOnInit() {
    const componentRef = this.vcr.createComponent(this.component.componentClass);
    componentRef.setInput("data", this.component.data)
    componentRef.setInput("children", this.component.children)
  }
}
