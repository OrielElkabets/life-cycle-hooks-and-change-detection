import { Injectable } from '@angular/core';
import { ComponentData, ComponentOptions, DynamicComponent } from '../models/dynamic-component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly root: DynamicComponent[]
  readonly componentsOptions = Object.entries(ComponentOptions);
  private numberOfComponents = 0

  constructor() {
    this.root = [
      {
        componentClass: ComponentOptions.Default,
        data: new ComponentData(this.getComponentName(), "#2dff2d"), //"#00c600"
        children: [
          {
            componentClass: ComponentOptions.Default,
            data: new ComponentData(this.getComponentName(), "#4fbcff"), // #0090e8
            children: [
              {
                componentClass: ComponentOptions.Default,
                data: new ComponentData(this.getComponentName(), "#ff69b4"), // #ff0381
              }
            ]
          }
        ]
      }
    ]
  }

  getComponentName(){
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphabetLength = alphabet.length;
    let prefix = "";
    let index = this.numberOfComponents++
  
    while (index >= 0) {
      prefix = alphabet[index % alphabetLength] + prefix;
      index = Math.floor(index / alphabetLength) - 1;
    }
  
    return `${prefix} Component`;
  }
}
