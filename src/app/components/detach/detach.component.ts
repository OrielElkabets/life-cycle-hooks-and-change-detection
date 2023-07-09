import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HooksImplementation } from 'src/app/models/hooks-implementation';
import { DynamicComponentDirective } from 'src/app/directives/dynamic-component-creator.directive';
import { ComponentData, DynamicComponent } from 'src/app/models/dynamic-component';

@Component({
  selector: 'app-a-detach',
  standalone: true,
  templateUrl: './detach.component.html',
  styleUrls: ['./detach.component.scss'],
  imports: [CommonModule, DynamicComponentDirective],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetachComponent extends HooksImplementation {
  @Input({ required: true }) data!: ComponentData
  @Input({ required: true }) children!: DynamicComponent[]

  cdr = inject(ChangeDetectorRef)
  CDCounter = 0

  override ngOnChanges() {
    this.setData(this.data)
    super.ngOnChanges()
  }

  override ngAfterViewChecked() {
    this.cdr.detach()
    super.ngAfterViewChecked()
  }

  change() {
    this.log("change detection 🔄")
    return this.CDCounter
  }

  triggerChangeDetection() {
    this.CDCounter++
    this.cdr.detectChanges()
  }
}
