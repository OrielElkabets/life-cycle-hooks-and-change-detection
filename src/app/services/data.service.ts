import { Injectable } from '@angular/core';
import { ComponentData, ComponentOptions, DynamicComponent } from '../models/dynamic-component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly colors = [
    "#75baff",
    "#5aff57",
    "#ffe666",
    "#ffc16b",
    "#ff6161",
    "#ff70c6",
    "#b58aff",
  ];
  private readonly alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  private numberOfComponents = 0

  readonly root: DynamicComponent[]
  readonly componentsOptions = Object.entries(ComponentOptions);
  treeChange = true

  constructor() {
    this.root = [
      {
        componentClass: ComponentOptions.Default,
        data: new ComponentData(this.getComponentName(), this.getColor(), true),
        children: [
          {
            componentClass: ComponentOptions.Default,
            data: new ComponentData(this.getComponentName(), this.getColor()),
            children: [
              {
                componentClass: ComponentOptions.Default,
                data: new ComponentData(this.getComponentName(), this.getColor()),
              }
            ]
          }
        ]
      }
    ]
  }

  getComponentName(): string {
    const alphabetLength = this.alphabet.length;
    let prefix = "";
    let index = this.numberOfComponents++

    while (index >= 0) {
      prefix = this.alphabet[index % alphabetLength] + prefix;
      index = Math.floor(index / alphabetLength) - 1;
    }

    return `${prefix} Component`;
  }

  calcTreeDepth(): number {
    return this._clacTreeDepth(this.root[0])
  }

  private _clacTreeDepth(component: DynamicComponent): number {
    const maxChildCount: number[] = component.children?.map<number>(child => this._clacTreeDepth(child)) ?? [0, 0]
    return 1 + Math.max(...maxChildCount)
  }

  appendChild(component: DynamicComponent) {
    component.children ??= []
    component.children.push({
      componentClass: ComponentOptions.Default,
      data: new ComponentData(this.getComponentName(), this.getColor()), // #ff0381
    })
    this.treeChange = !this.treeChange
  }

  deleteComponent(parent: DynamicComponent, component: DynamicComponent) {
    const index = parent.children!.findIndex(child => child == component)
    
    parent.children!.splice(index, 1)
    if (parent.children!.length == 0) parent.children = undefined
    
    this.treeChange = !this.treeChange
  }

  getColor(){
    return this.colors[(this.numberOfComponents - 1) % this.colors.length]
  }
}
