import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { EmployeeEvent } from '../employeeEvent';
import { EmployeeEventService } from '../employeeEvent.service';
import { Employee } from '../../Employee/employee';
import { EmployeeEditUI } from '../../Employee/edit/employee.edit';
import { EventType } from '../../../Base.HR/EventType/eventType';
import { EventTypeEditUI } from '../../../Base.HR/EventType/edit/eventType.edit';



@Component({
  selector: 'hr-employeeEvent-edit',
  templateUrl: './employeeEvent.edit.html',
  styleUrls: ['./employeeEvent.edit.css']
})
export class EmployeeEventEditUI extends EditModal<EmployeeEvent> implements IEditModal<EmployeeEvent>  {
  
  constructor(private employeeEventService: EmployeeEventService) {
    super(employeeEventService); 
    this.currentInstance = new EmployeeEvent();
  }

  //#region Foreign Entities
	
	//#region -- Employee --

  employeeComponent : ForeignComponent<Employee> = new ForeignComponent<Employee>(this.employeeEventService.EmployeeService);

  @Input()
  public set Employee(value: Employee) {
    this.currentInstance.employee = this.employeeComponent.instance = value;
  }  


  //#endregion -- Employee --
	//#region -- EventType --

  eventTypeComponent : ForeignComponent<EventType> = new ForeignComponent<EventType>(this.employeeEventService.EventTypeService);

  @Input()
  public set EventType(value: EventType) {
    this.currentInstance.eventType = this.eventTypeComponent.instance = value;
  }  


  //#endregion -- EventType --
	//#endregion

  @ViewChild('employeeEventEditUI')
  private employeeEventEditUI: NgForm;

  Init(employeeEvent: EmployeeEvent = new EmployeeEvent()) {
    if (employeeEvent.isNew)
      this.employeeEventEditUI.reset();
    this.InitEmployeeEvent(employeeEvent);
    this.loadLists();
  }

  private loadLists() {
    
    this.eventTypeComponent.LoadList();
  }
  
  InitEmployeeEvent(employeeEvent: EmployeeEvent) {
    if (!employeeEvent.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.employeeComponent.instance = employeeEvent.employee;
			this.eventTypeComponent.instance = employeeEvent.eventType;
    } else {
      employeeEvent.employee = this.employeeComponent.instance;
			employeeEvent.eventType = this.eventTypeComponent.instance;
    }
    this.currentInstance = employeeEvent;
  }

  ResetForm() {
    this.Employee = new Employee();
		this.EventType = new EventType();
  }
}