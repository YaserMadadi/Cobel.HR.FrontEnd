import { Directive } from "@angular/core";
import { BusinessObject } from "../../../business-object";

export interface IEditModal<T extends BusinessObject> {

    AfterShown(entity: T): void;

    ShowDialog(entity: T): void;

    Init(entity: T): void;

    //currentInstance: T;
}