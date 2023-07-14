import { Pipe, PipeTransform, inject } from '@angular/core';
import { DataService } from '../services/data.service';

@Pipe({
  name: 'updateTreeWidth',
  standalone: true
})
export class UpdateTreeWidthPipe implements PipeTransform {

  dataService = inject(DataService)

  transform(trigger: boolean): string {
    return this.dataService.calcTreeDepth() * 30 + 390 + "px";
  }

}
