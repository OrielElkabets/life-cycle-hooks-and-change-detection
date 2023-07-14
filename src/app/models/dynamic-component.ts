import { DefaultComponent } from "../components/default/default.component";
import { DetachComponent } from "../components/detach/detach.component";
import { OnPushComponent } from "../components/onpush/onpush.component";
import { Color } from "./color";

export type DynamicComponent = {
    componentClass: ComponentType
    data: ComponentData
    children?: DynamicComponent[]
}

export class ComponentData {
    constructor(public name: string, public color: string, public isConst = false) {}
}

// export class ComponentData {
//     color1: string
//     color2: string

//     constructor(public name: string, public hexColor: string) {
//         this.color1 = hexColor
//         this.color2 = Color.pSBC(-0.30, hexColor) ?? ""
//     }
// }

export class ComponentOptions {
    static Default = DefaultComponent
    static OnPush = OnPushComponent
    static Detach = DetachComponent
}

type ComponentType = typeof DefaultComponent | typeof OnPushComponent | typeof DetachComponent