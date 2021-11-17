import { Output, EventEmitter, Input, ViewChild, Directive } from "@angular/core";
import { BusinessObject } from "../../../business-object";
import { TabsetComponent } from "ngx-bootstrap/tabs";
import { IService } from "../../../service/base/service.interface";
import { LogViewerComponent } from "../log-viewer/log-viewer.component";
import { PermissionController } from "../../controller.permission";
import { PermissionResult, PermissionType } from "../../Enum";

@Directive()
export class MasterModal<T extends BusinessObject>  {

    constructor(public service: IService<T> = null) {
        this.currentInstance = service?.CreateInstance();
    }

    currentInstance: T;

    onReload() {
        this.service.RetrieveById(this.currentInstance.id)
            .then(entity => this.currentInstance = entity);
    }

    onLog(logViewerComponent: LogViewerComponent) {
        if (PermissionController.Check(logViewerComponent.Entity.info, PermissionType.ViewLog) == PermissionResult.Denied)
            return;
        logViewerComponent.onLoad();
    }

    onGuid(propertyName: string) {
        console.log(`${this.currentInstance.info.schema}.${this.currentInstance.info.name}.${propertyName} in MasterPage`);
    }

    @Input()
    IsShown: boolean = false;

    @ViewChild("tabset")
    tabset: TabsetComponent;

    @Output()
    public onClosed: EventEmitter<T> = new EventEmitter<T>();

    public onShown() {

    }

    public ShowDialog(entity: T) {
        this.currentInstance = entity;
        if (this.tabset?.tabs?.length > 0) {
            this.tabset.tabs[0].selectTab.emit();
        }
        // if (!AuthGuard.IsAuthenticated) {
        //     AuthGuard.SignOut();
        //     return;
        // }
        this.IsShown = true;
        //this.onShown.emit(true);
        this.onShown();
    }

    public onClose(value: T = null) {
        this.IsShown = false;
        this.onClosed.emit(value);
        this.ResetForm();
    }

    public ResetForm() {

    }

    // public navigate(schema: string, name: string, id: number = 0) {
    //     let info = new Info(schema, name);
    //     if (PermissionManager.Check(info, PermissionType.Retrieve) === PermissionResult.Denied)
    //         return false;
    //     AuthGuard.Router.navigate([info.schema, info.name, id]);
    //     return true;
    // }


}