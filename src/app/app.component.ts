import { Component, inject, NgZone, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { myLogger } from './models/logger';
import { DynamicComponentDirective } from './directives/dynamic-component-creator.directive';
import { DataService } from './services/data.service';
import { TreeNodeComponent } from "./components/tree-node/tree-node.component";
import { UpdateTreeWidthPipe } from "./pipes/update-tree-width.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, TreeNodeComponent, DynamicComponentDirective, UpdateTreeWidthPipe]
})
export class AppComponent {
  title = 'Detach';

  name = "App"
  color = "color: #00fbff;"

  isStart = false
  isInit = false
  isExtraCheck = true

  dataService = inject(DataService)
  zone = inject(NgZone)

  change() {
    if (!this.isStart) return
    if (!this.isInit) {
      this.isInit = true
      return ""
    }
    if(isDevMode()) this.inDev()
    else this.inProd()
    return ""
  }

  log(msg: string) {
    myLogger([this.name, msg], [this.color + "font-weight: bold;", this.color])
  }

  showComponentTree() {
    this.isStart = !this.isStart
    this.log("initialize app")
    if(!isDevMode()){
      this.drawSeperationLine()
    }
  }

  inDev() {
    if (this.isExtraCheck) {
      this.log("start development extra check")
      this.drawSeperationLine()
    }
    else {
      this.log("start change detection cycle")
    }
    this.isExtraCheck = !this.isExtraCheck
  }

  inProd() {
    this.log("start change detection cycle")
    this.drawSeperationLine()
  }
  
  drawSeperationLine(){    
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        console.log("----------------------------------")
      });
    })
  }
}
