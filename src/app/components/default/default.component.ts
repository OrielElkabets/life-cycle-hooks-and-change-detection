import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HooksImplementation } from 'src/app/models/hooks-implementation';
import { ComponentData, DynamicComponent } from 'src/app/models/dynamic-component';
import { DynamicComponentDirective } from 'src/app/directives/dynamic-component-creator.directive';

@Component({
  selector: 'app-default',
  standalone: true,
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  imports: [CommonModule, DynamicComponentDirective]
})
export class DefaultComponent extends HooksImplementation {
  @Input({ required: true }) data!: ComponentData
  @Input() child?: DynamicComponent
  CDCounter = 0

  override ngOnInit() {
    this.setData(this.data)
    super.ngOnInit()
  }

  override ngAfterContentChecked(): void {
    this.CDCounter++
    super.ngAfterContentChecked()
  }

  change() {
    this.log("change detection 🔄")
    return this.CDCounter
  }
}
