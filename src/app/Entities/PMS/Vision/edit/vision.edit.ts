import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Vision } from '../vision';
import { VisionService } from '../vision.service';
import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';



@Component({
  selector: 'pms-vision-edit',
  templateUrl: './vision.edit.html',
  styleUrls: ['./vision.edit.css']
})
export class VisionEditUI extends EditModal<Vision> implements IEditModal<Vision>  {
  
  constructor(private visionService: VisionService) {
    super(visionService); 
    this.currentInstance = new Vision();
  }

  //#region Foreign Entities
	
	//#region -- Employee --

  employeeComponent : ForeignComponent<Employee> = new ForeignComponent<Employee>(this.visionService.EmployeeService);

  @Input()
  public set Employee(value: Employee) {
    this.currentInstance.employee = this.employeeComponent.instance = value;
  }  


  //#endregion -- Employee --
	//#endregion

  @ViewChild('visionEditUI')
  private visionEditUI: NgForm;

  Init(vision: Vision = new Vision()) {
    if (vision.isNew)
      this.visionEditUI.reset();
    this.InitVision(vision);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitVision(vision: Vision) {
    if (!vision.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.employeeComponent.instance = vision.employee;
    } else {
      vision.employee = this.employeeComponent.instance;
    }
    this.currentInstance = vision;
  }

  ResetForm() {
    this.Employee = new Employee();
  }
}