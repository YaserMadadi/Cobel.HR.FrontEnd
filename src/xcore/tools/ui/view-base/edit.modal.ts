import { Directive, EventEmitter, HostListener, Output, ViewChild } from "@angular/core";
import { Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { BusinessObject } from "../../../business-object";
import { Service } from "../../../service/service";
import { PermissionResult, PermissionType } from "../../Enum";
import { IEditModal } from "./edit.modal.interface";

@Directive()
export class EditModal<T extends BusinessObject> implements IEditModal<T>{

    constructor(protected service: Service<T>) {
        this.currentInstance = service?.CreateInstance();
    }

    Init(entity: T): void {
        //throw new Error("Method not implemented.");
    }

    AfterShown(): void {
        //this.currentInstance = default(T);
    }

    @ViewChild('')
    public EditUI: NgForm;


    public currentInstance: T;

    @Input()
    IsShown: boolean = false;

    get IsEditMode(): boolean {
        return !this.currentInstance?.isNew;
    }

    IsLocked: boolean = false;

    @Output()
    public onClosed: EventEmitter<T> = new EventEmitter<T>();

    @Output()
    public onShown: EventEmitter<T> = new EventEmitter<T>();



    public ShowDialog(entity: T): void {
        let permissionType = entity.isNew ? PermissionType.Add : PermissionType.Edit;
        // if (permissionType == PermissionType.Add)
        //     this.ResetForm();
        if (this.service.CheckPermission(permissionType) === PermissionResult.Denied)
            return;
        // if(entity.isNew)
        //     this.EditUI.reset();
        this.IsShown = true;
        // this.innerInstance = entity;
        this.Init(entity);
        this.onShown.emit(entity);
        this.AfterShown();
        //this.SetDefault();
    }

    public Close(value: T = null, isContinue: boolean) {
        this.ResetForm();
        if (isContinue)
            return;
        this.IsShown = false;
        this.onClosed.emit(value);
    }

    onClose() {
        this.Close(null, false)
    }

    async onSave(instance: T, editUI: NgForm, isContinue: boolean = false) {
        //console.log(instance);
        this.Lock();
        let entity = await this.service.Save(instance);
        this.UnLock();

        console.log('Entity : ', entity);
        if (BusinessObject.NotConfirm(entity))
            return;

        console.log('after IF: ', entity);

        editUI.reset();
        //this.currentInstance = entity;
        this.Close(entity, isContinue);
    }

    async onSaveAttached(instance: T, editUI: NgForm, isContinue: boolean = false) {
        //console.log(instance);
        this.Lock();
        let entity = await this.service.SaveAttached(instance);
        this.UnLock();

        if (BusinessObject.NotConfirm(entity))
            return;

        editUI.reset();
        //this.currentInstance = entity;
        this.Close(entity, isContinue);
    }

    public ResetForm() {

    }

    public SetDefault() {

    }

    public Lock() {
        this.IsLocked = true;
    }

    public UnLock() {
        this.IsLocked = false;
    }

    public onGuid(propertyName: string) {
        let fullName = this.currentInstance.info.schema + '.' + this.currentInstance.info.name + '.' + propertyName;
        console.log(fullName);
    }

    // @HostListener('mousewheel', ['$event']) onMouseWheelChrome(event: any) {
    //     console.log('chrome');

    //     event.preventDefault();
    //     event.target.blur();
    //     this.disableScroll(event);
    // }

    // @HostListener('DOMMouseScroll', ['$event']) onMouseWheelFirefox(event: any) {
    //     console.log('Fire');

    //     this.disableScroll(event);
    // }

    // @HostListener('onmousewheel', ['$event']) onMouseWheelIE(event: any) {
    //     console.log('IE');

    //     this.disableScroll(event);
    // }


    disableScroll(event: any) {
        // console.log('Event : ', event);
        // event.target.blur();
        // if (event.srcElement.type === "number")
        //     event.preventDefault();
    }

}

