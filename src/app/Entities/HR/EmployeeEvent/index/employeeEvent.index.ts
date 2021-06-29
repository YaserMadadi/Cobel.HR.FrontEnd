import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { EmployeeEvent } from '../employeeEvent';
import { EmployeeEventService } from '../employeeEvent.service';
import { EmployeeEventMasterUI } from '../master/employeeEvent.master';
import { EmployeeEventEditUI } from '../edit/employeeEvent.edit';
import { EmployeeEventDeleteUI } from '../delete/employeeEvent.delete';

import { Employee } from '../../Employee/employee';
import { EmployeeEditUI } from '../../Employee/edit/employee.edit';
import { EventType } from '../../../Base.HR/EventType/eventType';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'hr-employeeEvent-index',
  templateUrl: './employeeEvent.index.html',
  styleUrls: ['./employeeEvent.index.css']
})
export class EmployeeEventIndexUI extends IndexView<EmployeeEvent> implements AfterViewInit, IIndexView<EmployeeEvent> {

  constructor(private employeeEventService: EmployeeEventService) {
    super(employeeEventService);
    this.filterInstance = EmployeeEvent.SeekInstance();
    this.currentInstance = new EmployeeEvent();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(employeeEventEditUI: EmployeeEventEditUI){
    employeeEventEditUI.ShowDialog(new EmployeeEvent());
  }

  resetFilter() {
    this.filterInstance = EmployeeEvent.SeekInstance();
    
    
  }

  public onEditModalClosed(employeeEvent: EmployeeEvent) {
    this.onRefresh();
    this.currentInstance = new EmployeeEvent();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}