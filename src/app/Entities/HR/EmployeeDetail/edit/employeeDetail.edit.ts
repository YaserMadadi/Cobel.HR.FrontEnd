import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { EmployeeDetail } from '../employeeDetail';
import { EmployeeDetailService } from '../employeeDetail.service';
import { Employee } from '../../Employee/employee';
import { EmployeeEditUI } from '../../Employee/edit/employee.edit';
import { HoldingSection } from '../../../Base/HoldingSection/holdingSection';
import { HoldingSectionEditUI } from '../../../Base/HoldingSection/edit/holdingSection.edit';
import { EmploymentStatus } from '../../../Base.HR/EmploymentStatus/employmentStatus';
import { EmploymentStatusEditUI } from '../../../Base.HR/EmploymentStatus/edit/employmentStatus.edit';



@Component({
  selector: 'hr-employeeDetail-edit',
  templateUrl: './employeeDetail.edit.html',
  styleUrls: ['./employeeDetail.edit.css']
})
export class EmployeeDetailEditUI extends EditModal<EmployeeDetail> implements IEditModal<EmployeeDetail>  {
  
  constructor(private employeeDetailService: EmployeeDetailService) {
    super(employeeDetailService); 
    this.currentInstance = new EmployeeDetail();
  }

  //#region Foreign Entities
	
	//#region -- Employee --

  employeeComponent : ForeignComponent<Employee> = new ForeignComponent<Employee>(this.employeeDetailService.EmployeeService);

  @Input()
  public set Employee(value: Employee) {
    this.currentInstance.employee = this.employeeComponent.instance = value;
  }  


  //#endregion -- Employee --
	//#region -- HoldingSection --

  holdingSectionComponent : ForeignComponent<HoldingSection> = new ForeignComponent<HoldingSection>(this.employeeDetailService.HoldingSectionService);

  @Input()
  public set HoldingSection(value: HoldingSection) {
    this.currentInstance.holdingSection = this.holdingSectionComponent.instance = value;
  }  


  //#endregion -- HoldingSection --
	//#region -- EmploymentStatus --

  employmentStatusComponent : ForeignComponent<EmploymentStatus> = new ForeignComponent<EmploymentStatus>(this.employeeDetailService.EmploymentStatusService);

  @Input()
  public set EmploymentStatus(value: EmploymentStatus) {
    this.currentInstance.employmentStatus = this.employmentStatusComponent.instance = value;
  }  


  //#endregion -- EmploymentStatus --
	//#endregion

  @ViewChild('employeeDetailEditUI')
  private employeeDetailEditUI: NgForm;

  Init(employeeDetail: EmployeeDetail = new EmployeeDetail()) {
    if (employeeDetail.isNew)
      this.employeeDetailEditUI.reset();
    this.InitEmployeeDetail(employeeDetail);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitEmployeeDetail(employeeDetail: EmployeeDetail) {
    if (!employeeDetail.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.employeeComponent.instance = employeeDetail.employee;
			this.holdingSectionComponent.instance = employeeDetail.holdingSection;
			this.employmentStatusComponent.instance = employeeDetail.employmentStatus;
    } else {
      employeeDetail.employee = this.employeeComponent.instance;
			employeeDetail.holdingSection = this.holdingSectionComponent.instance;
			employeeDetail.employmentStatus = this.employmentStatusComponent.instance;
    }
    this.currentInstance = employeeDetail;
  }

  ResetForm() {
    this.Employee = new Employee();
		this.HoldingSection = new HoldingSection();
		this.EmploymentStatus = new EmploymentStatus();
  }
}