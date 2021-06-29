import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Coaching } from '../coaching';
import { CoachingService } from '../coaching.service';
import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';
import { Coach } from '../../Coach/coach';
import { CoachEditUI } from '../../Coach/edit/coach.edit';



@Component({
  selector: 'lad-coaching-edit',
  templateUrl: './coaching.edit.html',
  styleUrls: ['./coaching.edit.css']
})
export class CoachingEditUI extends EditModal<Coaching> implements IEditModal<Coaching>  {
  
  constructor(private coachingService: CoachingService) {
    super(coachingService); 
    this.currentInstance = new Coaching();
  }

  //#region Foreign Entities
	
	//#region -- Employee --

  employeeComponent : ForeignComponent<Employee> = new ForeignComponent<Employee>(this.coachingService.EmployeeService);

  @Input()
  public set Employee(value: Employee) {
    this.currentInstance.employee = this.employeeComponent.instance = value;
  }  


  //#endregion -- Employee --
	//#region -- Coach --

  coachComponent : ForeignComponent<Coach> = new ForeignComponent<Coach>(this.coachingService.CoachService);

  @Input()
  public set Coach(value: Coach) {
    this.currentInstance.coach = this.coachComponent.instance = value;
  }  


  //#endregion -- Coach --
	//#endregion

  @ViewChild('coachingEditUI')
  private coachingEditUI: NgForm;

  Init(coaching: Coaching = new Coaching()) {
    if (coaching.isNew)
      this.coachingEditUI.reset();
    this.InitCoaching(coaching);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitCoaching(coaching: Coaching) {
    if (!coaching.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.employeeComponent.instance = coaching.employee;
			this.coachComponent.instance = coaching.coach;
    } else {
      coaching.employee = this.employeeComponent.instance;
			coaching.coach = this.coachComponent.instance;
    }
    this.currentInstance = coaching;
  }

  ResetForm() {
    this.Employee = new Employee();
		this.Coach = new Coach();
  }
}