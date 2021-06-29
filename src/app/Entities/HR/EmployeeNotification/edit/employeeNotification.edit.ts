import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { EmployeeNotification } from '../employeeNotification';
import { EmployeeNotificationService } from '../employeeNotification.service';
import { Employee } from '../../Employee/employee';
import { EmployeeEditUI } from '../../Employee/edit/employee.edit';



@Component({
  selector: 'hr-employeeNotification-edit',
  templateUrl: './employeeNotification.edit.html',
  styleUrls: ['./employeeNotification.edit.css']
})
export class EmployeeNotificationEditUI extends EditModal<EmployeeNotification> implements IEditModal<EmployeeNotification>  {
  
  constructor(private employeeNotificationService: EmployeeNotificationService) {
    super(employeeNotificationService); 
    this.currentInstance = new EmployeeNotification();
  }

  //#region Foreign Entities
	
	//#region -- Employee --

  employeeComponent : ForeignComponent<Employee> = new ForeignComponent<Employee>(this.employeeNotificationService.EmployeeService);

  @Input()
  public set Employee(value: Employee) {
    this.currentInstance.employee = this.employeeComponent.instance = value;
  }  


  //#endregion -- Employee --
	//#endregion

  @ViewChild('employeeNotificationEditUI')
  private employeeNotificationEditUI: NgForm;

  Init(employeeNotification: EmployeeNotification = new EmployeeNotification()) {
    if (employeeNotification.isNew)
      this.employeeNotificationEditUI.reset();
    this.InitEmployeeNotification(employeeNotification);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitEmployeeNotification(employeeNotification: EmployeeNotification) {
    if (!employeeNotification.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.employeeComponent.instance = employeeNotification.employee;
    } else {
      employeeNotification.employee = this.employeeComponent.instance;
    }
    this.currentInstance = employeeNotification;
  }

  ResetForm() {
    this.Employee = new Employee();
  }
}