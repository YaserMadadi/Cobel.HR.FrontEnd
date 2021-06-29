import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { EmploymentStatus } from '../employmentStatus';
import { EmploymentStatusService } from '../employmentStatus.service';
import { EmploymentStatusMasterUI } from '../master/employmentStatus.master';
import { EmploymentStatusEditUI } from '../edit/employmentStatus.edit';
import { EmploymentStatusDeleteUI } from '../delete/employmentStatus.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { EmployeeDetailEditUI } from '../../../HR/EmployeeDetail/edit/employeeDetail.edit';
import { EmployeeDetail } from '../../../HR/EmployeeDetail/employeeDetail';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';
import { Employee } from '../../../HR/Employee/employee';



@Component({
  selector: 'base.hr-employmentStatus-index',
  templateUrl: './employmentStatus.index.html',
  styleUrls: ['./employmentStatus.index.css']
})
export class EmploymentStatusIndexUI extends IndexView<EmploymentStatus> implements AfterViewInit, IIndexView<EmploymentStatus> {

  constructor(private employmentStatusService: EmploymentStatusService) {
    super(employmentStatusService);
    this.filterInstance = EmploymentStatus.SeekInstance();
    this.currentInstance = new EmploymentStatus();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region EmployeeDetail

  public employeeDetail_Clicked(employeeDetailEditUI: EmployeeDetailEditUI) {
    employeeDetailEditUI.EmploymentStatus = this.currentInstance;
    employeeDetailEditUI.ShowDialog(new EmployeeDetail());
  }
                    
  public employeeDetailEditUI_Closed(employeeDetail: EmployeeDetail) {
    if (!employeeDetail)
      return;
    this.onRefresh();
  }
  
  //#endregion EmployeeDetail

  //#region Employee

  public employee_Clicked(employeeEditUI: EmployeeEditUI) {
    employeeEditUI.EmploymentStatus = this.currentInstance;
    employeeEditUI.ShowDialog(new Employee());
  }
                    
  public employeeEditUI_Closed(employee: Employee) {
    if (!employee)
      return;
    this.onRefresh();
  }
  
  //#endregion Employee


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(employmentStatusEditUI: EmploymentStatusEditUI){
    employmentStatusEditUI.ShowDialog(new EmploymentStatus());
  }

  resetFilter() {
    this.filterInstance = EmploymentStatus.SeekInstance();
    
    
  }

  public onEditModalClosed(employmentStatus: EmploymentStatus) {
    this.onRefresh();
    this.currentInstance = new EmploymentStatus();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}