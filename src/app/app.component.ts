import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { myLogger } from './models/logger';
import { DynamicComponentDirective } from './directives/dynamic-component-creator.directive';
import { DataService } from './services/data.service';
import { TreeNodeComponent } from "./components/tree-node/tree-node.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, TreeNodeComponent, DynamicComponentDirective]
})
export class AppComponent implements OnInit {
  title = 'Detach';

  name = "App"
  color = "color: #fcff4b;"
  // color2 = `color: ${Color.pSBC(-0.30, '#fcff4b')};`
  isInit = false
  isExtraCheck = true
  isStart = false

  dataService = inject(DataService)

  ngOnInit(): void {
    this.log("initialize app")
  }

  change() {
    if (!this.isInit) {
      this.isInit = true
      return ""
    }
    if (this.isExtraCheck) this.log("start development extra check")
    else {
      this.log("start change detection cycle")
    }
    this.isExtraCheck = !this.isExtraCheck
    return ""
  }

  log(msg: string) {
    myLogger([this.name, msg], [this.color, this.color])
  }

  showComponentTree() {
    this.isStart = !this.isStart
    console.log(this.dataService.root);
  }
}
