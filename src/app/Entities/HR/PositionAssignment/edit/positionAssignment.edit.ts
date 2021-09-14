import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { PositionAssignment } from '../positionAssignment';
import { PositionAssignmentService } from '../positionAssignment.service';
import { Employee } from '../../Employee/employee';
import { EmployeeEditUI } from '../../Employee/edit/employee.edit';
import { Position } from '../../Position/position';
import { PositionEditUI } from '../../Position/edit/position.edit';



@Component({
  selector: 'hr-positionAssignment-edit',
  templateUrl: './positionAssignment.edit.html',
  styleUrls: ['./positionAssignment.edit.css']
})
export class PositionAssignmentEditUI extends EditModal<PositionAssignment> implements IEditModal<PositionAssignment>  {
  
  constructor(private positionAssignmentService: PositionAssignmentService) {
    super(positionAssignmentService); 
    this.currentInstance = new PositionAssignment();
  }

  //#region Foreign Entities
	
	//#region -- Employee --

  employeeComponent : ForeignComponent<Employee> = new ForeignComponent<Employee>(this.positionAssignmentService.EmployeeService);

  @Input()
  public set Employee(value: Employee) {
    this.currentInstance.employee = this.employeeComponent.instance = value;
  }  


  //#endregion -- Employee --
	//#region -- Position --

  positionComponent : ForeignComponent<Position> = new ForeignComponent<Position>(this.positionAssignmentService.PositionService);

  @Input()
  public set Position(value: Position) {
    this.currentInstance.position = this.positionComponent.instance = value;
  }  


  //#endregion -- Position --
	//#endregion

  @ViewChild('positionAssignmentEditUI')
  private positionAssignmentEditUI: NgForm;

  Init(positionAssignment: PositionAssignment = new PositionAssignment()) {
    if (positionAssignment.isNew)
      this.positionAssignmentEditUI.reset();
    this.InitPositionAssignment(positionAssignment);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitPositionAssignment(positionAssignment: PositionAssignment){
    this.currentInstance = this.service.CreateInstance();
    if (!positionAssignment.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.employeeComponent.instance = positionAssignment.employee;
			this.positionComponent.instance = positionAssignment.position;
    } else {
      positionAssignment.employee = this.employeeComponent.instance;
			positionAssignment.position = this.positionComponent.instance;
    }
    this.currentInstance = positionAssignment;
  }

  ResetForm() {
    this.Employee = new Employee();
		this.Position = new Position();
  }
}