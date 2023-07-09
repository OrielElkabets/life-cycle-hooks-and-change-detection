import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from 'src/app/models/dynamic-component';
import { DataService } from 'src/app/services/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tree-node',
  standalone: true,
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class TreeNodeComponent {
  @Input({ required: true }) component!: DynamicComponent
  componentsOptions = inject(DataService).componentsOptions
}
