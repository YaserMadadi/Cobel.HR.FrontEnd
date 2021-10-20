

import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { EventType } from '../eventType';
import { EventTypeService } from '../eventType.service';
import { EventTypeMasterUI } from '../master/eventType.master';
import { EventTypeEditUI } from '../edit/eventType.edit';
import { EventTypeDeleteUI } from '../delete/eventType.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { EmployeeEventEditUI } from '../../../HR/EmployeeEvent/edit/employeeEvent.edit';
import { EmployeeEvent } from '../../../HR/EmployeeEvent/employeeEvent';



@Component({
  selector: 'base.hr-eventType-index',
  templateUrl: './eventType.index.html',
  styleUrls: ['./eventType.index.css']
})
export class EventTypeIndexUI extends IndexView<EventType> implements AfterViewInit, IIndexView<EventType> {

  constructor(private eventTypeService: EventTypeService) {
    super(eventTypeService);
    this.filterInstance = EventType.SeekInstance();
    this.currentInstance = new EventType();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region EmployeeEvent

  public employeeEvent_Clicked(employeeEventEditUI: EmployeeEventEditUI) {
    employeeEventEditUI.EventType = this.currentInstance;
    employeeEventEditUI.ShowDialog(new EmployeeEvent());
  }
                    
  public employeeEventEditUI_Closed(employeeEvent: EmployeeEvent) {
    if (!employeeEvent)
      return;
    this.onRefresh();
  }
  
  //#endregion EmployeeEvent


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(eventTypeEditUI: EventTypeEditUI){
    eventTypeEditUI.ShowDialog(new EventType());
  }

  resetFilter() {
    this.filterInstance = EventType.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(eventType: EventType) {
    this.onRefresh();
    this.currentInstance = new EventType();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
