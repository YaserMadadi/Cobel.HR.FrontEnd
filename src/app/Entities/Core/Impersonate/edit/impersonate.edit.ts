import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Impersonate } from '../impersonate';
import { ImpersonateService } from '../impersonate.service';
import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';



@Component({
  selector: 'core-impersonate-edit',
  templateUrl: './impersonate.edit.html',
  styleUrls: ['./impersonate.edit.css']
})
export class ImpersonateEditUI extends EditModal<Impersonate> implements IEditModal<Impersonate>  {
  
  constructor(private impersonateService: ImpersonateService) {
    super(impersonateService); 
    this.currentInstance = new Impersonate();
  }

  //#region Foreign Entities
	
	//#region -- Employee --

  employeeComponent : ForeignComponent<Employee> = new ForeignComponent<Employee>(this.impersonateService.EmployeeService);

  @Input()
  public set Employee(value: Employee) {
    this.currentInstance.employee = this.employeeComponent.instance = value;
  }  


  //#endregion -- Employee --
	//#endregion

  @ViewChild('impersonateEditUI')
  private impersonateEditUI: NgForm;

  Init(impersonate: Impersonate = new Impersonate()) {
    if (impersonate.isNew)
      this.impersonateEditUI.reset();
    this.InitImpersonate(impersonate);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitImpersonate(impersonate: Impersonate){
    this.currentInstance = this.service.CreateInstance();
    if (!impersonate.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.employeeComponent.instance = impersonate.employee;
    } else {
      impersonate.employee = this.employeeComponent.instance;
    }
    this.currentInstance = impersonate;
  }

  ResetForm() {
    this.Employee = new Employee();
  }
}