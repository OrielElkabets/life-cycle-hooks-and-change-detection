import { DefaultComponent } from "../components/default/default.component";
import { DetachComponent } from "../components/detach/detach.component";
import { OnPushComponent } from "../components/onpush/onpush.component";

export type DynamicComponent = {
    componentClass: ComponentOptions
    data: ComponentData
    child?: DynamicComponent
}

export type ComponentData = {
    name: string
    color1: string
    color2: string
}

type ComponentOptions = typeof DefaultComponent | typeof OnPushComponent| typeof DetachComponent