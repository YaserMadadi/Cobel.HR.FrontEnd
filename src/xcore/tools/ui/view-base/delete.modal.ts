import { Directive, EventEmitter, Input, Output } from "@angular/core";
import { BusinessObject } from "../../../business-object";
import { Service } from "../../../service/service";
import { PermissionResult, PermissionType } from "../../Enum";


@Directive()
export class DeleteModal<T extends BusinessObject>
{
    constructor(private service: Service<T>) {
    }

    currentInstance: T;

    @Input()
    IsShown: boolean = false;

    public IsLocked: boolean = false;

    @Output()
    public onClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Output()
    public onShownForm: EventEmitter<boolean> = new EventEmitter<boolean>();

    async onDelete() {
        let result = await this.service.Delete(this.currentInstance)
        this.Close(result);
    }

    public ShowDialog(entity: T) {
        if (this.service.CheckPermission(PermissionType.Delete) === PermissionResult.Denied)
            return;
        this.currentInstance = entity;
        this.IsShown = true;
        this.onShownForm.emit(true);
    }

    public Close(value: boolean) {
        this.IsShown = false;
        this.onClosed.emit(value);
        this.ResetForm();
    }

    public ResetForm() {

    }

    public onCancel() {
        this.Close(false);
    }

    public Lock() {
        this.IsLocked = true;
    }

    public UnLock() {
        this.IsLocked = false;
    }
}