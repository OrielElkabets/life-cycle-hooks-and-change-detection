import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Directive, DoCheck, NgZone, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { ComponentData } from "./dynamic-component";
import { myLogger } from "./logger";

@Directive()
export class HooksImplementation implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
    private name: string = "???"
    private color1: string = ""
    private color2: string = ""

    protected setData(data: ComponentData): void {
        this.name = data.name
        this.color1 = `color: ${data.color1};`
        this.color2 = `color: ${data.color2};`
    }

    ngOnInit(): void {
        this.log("on init")
    }
    ngOnChanges(changes: SimpleChanges): void {
        this.log("on changes")
    }
    ngDoCheck(): void {
        this.log("do check")
    }
    ngAfterContentInit(): void {
        this.log("after content init")
    }
    ngAfterContentChecked(): void {
        this.log("after content checked")
    }
    ngAfterViewInit(): void {
        this.log("after view init")
    }
    ngAfterViewChecked(): void {
        this.log("after view checked")
    }

    public log(msg: string) {
        myLogger([this.name, msg], [this.color1, this.color2])
    }
}