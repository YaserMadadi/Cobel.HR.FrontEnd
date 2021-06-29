import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Person } from '../../Person/person';
import { PersonEditUI } from '../../Person/edit/person.edit';
import { HoldingSection } from '../../../Base/HoldingSection/holdingSection';
import { HoldingSectionEditUI } from '../../../Base/HoldingSection/edit/holdingSection.edit';
import { EmploymentStatus } from '../../../Base.HR/EmploymentStatus/employmentStatus';
import { EmploymentStatusEditUI } from '../../../Base.HR/EmploymentStatus/edit/employmentStatus.edit';



@Component({
  selector: 'hr-employee-edit',
  templateUrl: './employee.edit.html',
  styleUrls: ['./employee.edit.css']
})
export class EmployeeEditUI extends EditModal<Employee> implements IEditModal<Employee>  {
  
  constructor(private employeeService: EmployeeService) {
    super(employeeService); 
    this.currentInstance = new Employee();
  }

  //#region Foreign Entities
	
	//#region -- Person --

  personComponent : ForeignComponent<Person> = new ForeignComponent<Person>(this.employeeService.PersonService);

  @Input()
  public set Person(value: Person) {
    this.currentInstance.person = this.personComponent.instance = value;
  }  


  //#endregion -- Person --
	//#region -- LastHoldingSection --

  lastHoldingSectionComponent : ForeignComponent<HoldingSection> = new ForeignComponent<HoldingSection>(this.employeeService.HoldingSectionService);

  @Input()
  public set LastHoldingSection(value: HoldingSection) {
    this.currentInstance.lastHoldingSection = this.lastHoldingSectionComponent.instance = value;
  }  


  //#endregion -- LastHoldingSection --
	//#region -- EmploymentStatus --

  employmentStatusComponent : ForeignComponent<EmploymentStatus> = new ForeignComponent<EmploymentStatus>(this.employeeService.EmploymentStatusService);

  @Input()
  public set EmploymentStatus(value: EmploymentStatus) {
    this.currentInstance.employmentStatus = this.employmentStatusComponent.instance = value;
  }  


  //#endregion -- EmploymentStatus --
	//#endregion

  @ViewChild('employeeEditUI')
  private employeeEditUI: NgForm;

  Init(employee: Employee = new Employee()) {
    if (employee.isNew)
      this.employeeEditUI.reset();
    this.InitEmployee(employee);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitEmployee(employee: Employee) {
    if (!employee.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.personComponent.instance = employee.person;
			this.lastHoldingSectionComponent.instance = employee.lastHoldingSection;
			this.employmentStatusComponent.instance = employee.employmentStatus;
    } else {
      employee.person = this.personComponent.instance;
			employee.lastHoldingSection = this.lastHoldingSectionComponent.instance;
			employee.employmentStatus = this.employmentStatusComponent.instance;
    }
    this.currentInstance = employee;
  }

  ResetForm() {
    this.Person = new Person();
		this.LastHoldingSection = new HoldingSection();
		this.EmploymentStatus = new EmploymentStatus();
  }
}