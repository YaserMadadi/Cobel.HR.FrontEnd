import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { EmployeeNotification } from '../employeeNotification';
import { EmployeeNotificationService } from '../employeeNotification.service';
import { EmployeeNotificationMasterUI } from '../master/employeeNotification.master';
import { EmployeeNotificationEditUI } from '../edit/employeeNotification.edit';
import { EmployeeNotificationDeleteUI } from '../delete/employeeNotification.delete';

import { Employee } from '../../Employee/employee';
import { EmployeeEditUI } from '../../Employee/edit/employee.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'hr-employeeNotification-index',
  templateUrl: './employeeNotification.index.html',
  styleUrls: ['./employeeNotification.index.css']
})
export class EmployeeNotificationIndexUI extends IndexView<EmployeeNotification> implements AfterViewInit, IIndexView<EmployeeNotification> {

  constructor(private employeeNotificationService: EmployeeNotificationService) {
    super(employeeNotificationService);
    this.filterInstance = EmployeeNotification.SeekInstance();
    this.currentInstance = new EmployeeNotification();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(employeeNotificationEditUI: EmployeeNotificationEditUI){
    employeeNotificationEditUI.ShowDialog(new EmployeeNotification());
  }

  resetFilter() {
    this.filterInstance = EmployeeNotification.SeekInstance();
    
    
  }

  public onEditModalClosed(employeeNotification: EmployeeNotification) {
    this.onRefresh();
    this.currentInstance = new EmployeeNotification();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}