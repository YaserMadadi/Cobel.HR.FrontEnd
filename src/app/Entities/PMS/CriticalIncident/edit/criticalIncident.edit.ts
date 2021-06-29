import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { CriticalIncident } from '../criticalIncident';
import { CriticalIncidentService } from '../criticalIncident.service';
import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';
import { CriticalIncidentType } from '../../CriticalIncidentType/criticalIncidentType';
import { CriticalIncidentTypeEditUI } from '../../CriticalIncidentType/edit/criticalIncidentType.edit';



@Component({
  selector: 'pms-criticalIncident-edit',
  templateUrl: './criticalIncident.edit.html',
  styleUrls: ['./criticalIncident.edit.css']
})
export class CriticalIncidentEditUI extends EditModal<CriticalIncident> implements IEditModal<CriticalIncident>  {
  
  constructor(private criticalIncidentService: CriticalIncidentService) {
    super(criticalIncidentService); 
    this.currentInstance = new CriticalIncident();
  }

  //#region Foreign Entities
	
	//#region -- Employee --

  employeeComponent : ForeignComponent<Employee> = new ForeignComponent<Employee>(this.criticalIncidentService.EmployeeService);

  @Input()
  public set Employee(value: Employee) {
    this.currentInstance.employee = this.employeeComponent.instance = value;
  }  


  //#endregion -- Employee --
	//#region -- CriticalIncidentType --

  criticalIncidentTypeComponent : ForeignComponent<CriticalIncidentType> = new ForeignComponent<CriticalIncidentType>(this.criticalIncidentService.CriticalIncidentTypeService);

  @Input()
  public set CriticalIncidentType(value: CriticalIncidentType) {
    this.currentInstance.criticalIncidentType = this.criticalIncidentTypeComponent.instance = value;
  }  


  //#endregion -- CriticalIncidentType --
	//#endregion

  @ViewChild('criticalIncidentEditUI')
  private criticalIncidentEditUI: NgForm;

  Init(criticalIncident: CriticalIncident = new CriticalIncident()) {
    if (criticalIncident.isNew)
      this.criticalIncidentEditUI.reset();
    this.InitCriticalIncident(criticalIncident);
    this.loadLists();
  }

  private loadLists() {
    
    this.criticalIncidentTypeComponent.LoadList();
  }
  
  InitCriticalIncident(criticalIncident: CriticalIncident) {
    if (!criticalIncident.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.employeeComponent.instance = criticalIncident.employee;
			this.criticalIncidentTypeComponent.instance = criticalIncident.criticalIncidentType;
    } else {
      criticalIncident.employee = this.employeeComponent.instance;
			criticalIncident.criticalIncidentType = this.criticalIncidentTypeComponent.instance;
    }
    this.currentInstance = criticalIncident;
  }

  ResetForm() {
    this.Employee = new Employee();
		this.CriticalIncidentType = new CriticalIncidentType();
  }
}