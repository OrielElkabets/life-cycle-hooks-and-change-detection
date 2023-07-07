import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { myLogger } from './models/logger';
import { DynamicComponentDirective } from './directives/dynamic-component-creator.directive';
import { DynamicComponent } from './models/dynamic-component';
import { DetachComponent } from './components/detach/detach.component';
import { DefaultComponent } from './components/default/default.component';
import { OnPushComponent } from './components/onpush/onpush.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, DynamicComponentDirective]
})
export class AppComponent implements OnInit {
  title = 'Detach';

  name = "App"
  color1 = "color: rgb(252, 255, 75);"
  color2 = "color: #c7cb00;"
  isInit = false
  isExtraCheck = true

  root: DynamicComponent = {
    componentClass: DefaultComponent,
    data: {
      name: "A Component",
      color1: "rgb(45, 255, 45)",
      color2: "#00c600",
    },
    child: {
      componentClass: DefaultComponent,
      data: {
        name: "B Component",
        color1: "rgb(79, 188, 255)",
        color2: "#0090e8",
      },
      child: {
        componentClass: DefaultComponent,
        data: {
          name: "C Component",
          color1: "hotpink",
          color2: "#ff0381",
        },
      }
    }
  }

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
    myLogger([this.name, msg], [this.color1, this.color2])
  }
}
