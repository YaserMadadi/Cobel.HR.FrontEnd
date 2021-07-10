import { Info } from "../../../Info";
import { PermissionResult, PermissionType } from "../../Enum";
import { Router } from "@angular/router";
import { OnInit, Input } from "@angular/core";
import { BusinessObject } from "../../../business-object";
import { Service } from "../../../service/service";
import { PermissionController } from '../../controller.permission';
import { IService } from "../../../service/base/service.interface";

export abstract class DetailView<T extends BusinessObject> {

    constructor(private service: IService<T>) {
    }

    public navigate(schema: string, name: string, id: number = 0): boolean {
        let info = new Info(schema, name);
        if (PermissionController.Check(info, PermissionType.Retrieve) === PermissionResult.Denied)
            return false;

        this.service.Navigate(info, id, PermissionType.Retrieve);
        return true;
    }

    abstract onReload(): void;

    
}