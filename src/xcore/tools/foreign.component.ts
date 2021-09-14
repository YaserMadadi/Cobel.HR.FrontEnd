import { NgForm } from '@angular/forms';
import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';
import { BusinessObject } from '../business-object';
import { Service } from '../service/service';
// import { BusinessObject } from '../../../../xcore/BusinessObject';
// import { Info } from '../../../../xcore/Info';
// import { BaseService } from '../../../../xcore/service/base/BaseService';
import { IEditModal } from './ui/view-base/edit.modal.interface';
import { Info } from '../Info';
import { Paginate } from './paginate';

export class ForeignComponent<T extends BusinessObject> {

    constructor(service: Service<T>, filterable: boolean = true, addable: boolean = false) {
        this.service = service;
        this.filterable = filterable;
        this.addable = addable;
        this.info = service.info;
        this._instance = service.CreateInstance();
    }

    private service: Service<T>;

    private info: Info;

    private _instance: T; //<T>new BusinessObject();

    public get instance(): T {
        return this._instance;
    }

    public set instance(value: T) {
        this._instance = value;
        // this.list = [value];
        //console.log('init');
        //this.DoFilter();
    }

    public selectedItem: T;

    public filterable: boolean;

    public addable: boolean;

    public list: T[] = [];

    public async DoFilter(value: string = '') {
        this.delaySeek(value);
    }

    private timer;

    private delaySeek(value: string) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => this.onSeek(value), 800);
    }

    private async onSeek(value: string = '') {
        this.list = await this.service.SeekByValue(value);
        if (this.list.length == 0 && BusinessObject.Confirm(this.instance))
            this.list = [this.instance];
        // else if (this.list.length == 1)
        //     this.instance = this.list[0];
    }

    public async LoadList() {
        if (BusinessObject.NotConfirm(this.instance))
            this.list = await this.service.RetrieveAll();
        //console.log('load list : ', this.list);
    }

    public async onClosed(instance: T): Promise<T> {
        if (BusinessObject.NotConfirm(instance))
            return;
        this.list = [instance];
        this.instance = instance;
        return this.instance;
    }

    public async onAdd(dropDown: DropDownListComponent, form: IEditModal<T>) {
        dropDown.toggle(false);
        //form.ShowDialog(<T>new BusinessObject());
        form.ShowDialog(this.service.CreateInstance());
    }


}