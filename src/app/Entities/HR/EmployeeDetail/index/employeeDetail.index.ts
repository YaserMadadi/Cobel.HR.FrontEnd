import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { EmployeeDetail } from '../employeeDetail';
import { EmployeeDetailService } from '../employeeDetail.service';
import { EmployeeDetailMasterUI } from '../master/employeeDetail.master';
import { EmployeeDetailEditUI } from '../edit/employeeDetail.edit';
import { EmployeeDetailDeleteUI } from '../delete/employeeDetail.delete';

import { Employee } from '../../Employee/employee';
import { EmployeeEditUI } from '../../Employee/edit/employee.edit';
import { HoldingSection } from '../../../Base/HoldingSection/holdingSection';
import { HoldingSectionEditUI } from '../../../Base/HoldingSection/edit/holdingSection.edit';
import { EmploymentStatus } from '../../../Base.HR/EmploymentStatus/employmentStatus';
import { EmploymentStatusEditUI } from '../../../Base.HR/EmploymentStatus/edit/employmentStatus.edit';



import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'hr-employeeDetail-index',
  templateUrl: './employeeDetail.index.html',
  styleUrls: ['./employeeDetail.index.css']
})
export class EmployeeDetailIndexUI extends IndexView<EmployeeDetail> implements AfterViewInit, IIndexView<EmployeeDetail> {

  constructor(private employeeDetailService: EmployeeDetailService) {
    super(employeeDetailService);
    this.filterInstance = EmployeeDetail.SeekInstance();
    this.currentInstance = new EmployeeDetail();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(employeeDetailEditUI: EmployeeDetailEditUI){
    employeeDetailEditUI.ShowDialog(new EmployeeDetail());
  }

  resetFilter() {
    this.filterInstance = EmployeeDetail.SeekInstance();
    
    
  }

  public onEditModalClosed(employeeDetail: EmployeeDetail) {
    this.onRefresh();
    this.currentInstance = new EmployeeDetail();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}