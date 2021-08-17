import { Directive, EventEmitter, ViewChild } from "@angular/core";

import { PermissionType, PermissionResult, MessageType } from "../../Enum";
import { BusinessObject } from "../../../business-object";
import { Service } from "../../../service/service";
import { Router, NavigationEnd } from "@angular/router";
import { MessageController } from "../../controller.message";
import { MasterModal } from "./master.modal";
import { EditModal } from "./edit.modal";
import { DeleteModal } from "./delete.modal";
import { IIndexView } from "./index.view.interface";
import { AuthGuard } from "../../../security/auth_guard";
//import { LogViewerComponent } from "../log-viewer/log-viewer.component";
import { PaginatorComponent } from "../components/paginator/paginator.component";
import { PermissionController } from "../../controller.permission";
import { LogViewerComponent } from "../log-viewer/log-viewer.component";

@Directive()
export class IndexView<T extends BusinessObject> implements IIndexView<T> {

    private router: Router;
    // private activatedRoute: ActivatedRoute;

    constructor(private businessObjectService: Service<T>) { // private router: Router, private activatedRoute: ActivatedRoute) {
        this.router = businessObjectService.router;
        this.currentInstance = businessObjectService?.CreateInstance();
        this.router.events.forEach((event) => {
            if (event instanceof NavigationEnd) {
                this.urlWatcher(event.url);
            }
        });
    }

    @ViewChild("Paginator")
    paginatorComponent: PaginatorComponent;

    public IdChanged: EventEmitter<number> = new EventEmitter<number>();

    public onIdChanged() {

    }

    

    //#region Id

    private id: number;

    public get Id(): number {
        return this.id;
    }

    public set Id(idValue: number) {
        if(idValue == this.id)
            return;
        this.id = isNaN(idValue) ? 0 : idValue;
        this.onIdChanged();
        this.IdChanged.emit(this.id);
        this.onRefresh();
    }

    //#endregion

    onRefresh(number: number = 0) {
        this.resetFilter();
        this.Id === 0 ? this.onSeek(1) : this.onRetrieveById();
    }

    resetFilter() {
        //Should Implemented in the heritor...
        this.currentInstance = this.businessObjectService?.CreateInstance();
    }

    public doFilter(keyboardEvent: KeyboardEvent) {
        if (this.IsSpecificKey(keyboardEvent))
            return;
        if (keyboardEvent.key === 'Escape') {
            this.resetFilter();
            this.onSeek(1);
        } else {
            this.DelaySeek(1);
        }
    }

    //public paginateComponent: PaginateComponent = new PaginateComponent();

    public currentInstance: T = <T>new BusinessObject();

    public filterInstance: T;

    public list: T[] = [];

    private timer;

    IsLocked: boolean = false;

    DelaySeek(pageNumber: number = 1) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => this.onSeek(pageNumber), 1500);
    }

    urlWatcher(url: string) {
        let urlSegments: string[] = AuthGuard.urlToArray(url);
        let numberValue = +urlSegments[urlSegments.length - 1];
        this.Id = (numberValue === null || isNaN(numberValue)) ? 0 : numberValue;
    }

    async onSeek(pageNumber: number) {
        if (this.Id == 0) {
            this.filterInstance.paginate.currentPage = pageNumber;
            this.businessObjectService.Seek(this.filterInstance)
                .then(list => {
                    //console.log('Seek result', list);
                    this.list = list;
                    this.currentInstance = <T>this.currentInstance.SeekInstance;
                    this.paginatorComponent?.RefreshUI(list[0]?.paginate);
                });
        }
    }

    async onRetrieveById() {
        this.businessObjectService.RetrieveById(this.Id)
            .then(returnValue => {
                this.list = BusinessObject.ToList(returnValue);
            });
    }

    public onSelect(i: number) {
        this.currentInstance = this.list[i];
    }

    public onDblClicked(masterUI: MasterModal<T>) {
        if (!this.currentInstance)
            return;

        masterUI.ShowDialog(this.currentInstance);
    }

    public onEdit(personEditUI: EditModal<T>) {
        if (!BusinessObject.Confirm(this.currentInstance)) {
            MessageController.ShowMessage(MessageType.SelectedRecordNotConfirmed);
            return;
        }
        personEditUI.ShowDialog(this.currentInstance);
    }

    public onDelete(personDeleteUI: DeleteModal<T>) {
        if (!BusinessObject.Confirm(this.currentInstance)) {
            MessageController.ShowMessage(MessageType.SelectedRecordNotConfirmed);
            return;
        }
        personDeleteUI.ShowDialog(this.currentInstance);
    }

    onLog(logViewerComponent: LogViewerComponent) {
        if (PermissionController.Check(logViewerComponent.Entity.info, PermissionType.ViewLog) == PermissionResult.Denied)
            return;
        logViewerComponent.onLoad();
    }


    PageChanging(pageNumber: number) {
        this.onSeek(pageNumber);
    }

    public onPrint(employeeTable: HTMLTableElement) {
        let newWin: Window = window.open("");
        employeeTable.style.fontSize = '10px';
        let html = `<div style='direction:rtl; font-family:Samim; font-size:9px;'>${employeeTable.outerHTML}</div>`;
        newWin.document.write(html);
        newWin.print();
        newWin.close();
    }



    navigate(schema: string, name: string, id: number) {
        console.log('id : ', id);
        this.router.navigate([schema, name, (id == null ? 0 : id)]);
    }

    IsSpecificKey(keyboardEvent: KeyboardEvent): boolean {
        return (keyboardEvent.key === "Tab" ||
            keyboardEvent.key === "" || //10 ||
            keyboardEvent.key.includes("Shift") || //16 ||
            keyboardEvent.key.includes("Control") || //17 ||
            keyboardEvent.key.includes("Alt") || //18 ||
            keyboardEvent.key === "Pause" || //19 ||
            keyboardEvent.key === "CapsLock" || //20 ||
            keyboardEvent.key === "Space" || //32 ||
            keyboardEvent.key === "End" || //35 ||
            keyboardEvent.key === "Delete") //46)
    }

    
}