import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HooksImplementation } from 'src/app/models/hooks-implementation';
import { DynamicComponentDirective } from 'src/app/directives/dynamic-component-creator.directive';
import { ComponentData, DynamicComponent } from 'src/app/models/dynamic-component';

@Component({
    selector: 'app-a-onpush',
    standalone: true,
    templateUrl: './onpush.component.html',
    styleUrls: ['./onpush.component.scss'],
    imports: [CommonModule, DynamicComponentDirective],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent extends HooksImplementation {
  @Input({ required: true }) data!: ComponentData
  @Input() child?: DynamicComponent
  CDCounter = 0

  override ngOnInit(){
    this.setData(this.data)
    super.ngOnInit()
  }

  change(){
    this.log("change detection 🔄")
    this.CDCounter++
    return this.CDCounter
  }
}
