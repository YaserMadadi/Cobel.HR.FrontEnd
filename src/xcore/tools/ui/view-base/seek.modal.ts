import { Directive, EventEmitter, Output } from "@angular/core";
import { BusinessObject } from "../../../business-object";

@Directive()
export class SeekModal<T extends BusinessObject>  {

    constructor() {

    }

    currentInstance: T;

    IsShown: boolean = false;

    @Output()
    OnClosedEvent: EventEmitter<T> = new EventEmitter<T>();


    onClose(instance: T) {
        this.OnClosedEvent.emit(instance);
    }
}