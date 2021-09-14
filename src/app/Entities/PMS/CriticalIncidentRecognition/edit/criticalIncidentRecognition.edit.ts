import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { CriticalIncidentRecognition } from '../criticalIncidentRecognition';
import { CriticalIncidentRecognitionService } from '../criticalIncidentRecognition.service';
import { CriticalIncident } from '../../CriticalIncident/criticalIncident';
import { CriticalIncidentEditUI } from '../../CriticalIncident/edit/criticalIncident.edit';
import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';



@Component({
  selector: 'pms-criticalIncidentRecognition-edit',
  templateUrl: './criticalIncidentRecognition.edit.html',
  styleUrls: ['./criticalIncidentRecognition.edit.css']
})
export class CriticalIncidentRecognitionEditUI extends EditModal<CriticalIncidentRecognition> implements IEditModal<CriticalIncidentRecognition>  {
  
  constructor(private criticalIncidentRecognitionService: CriticalIncidentRecognitionService) {
    super(criticalIncidentRecognitionService); 
    this.currentInstance = new CriticalIncidentRecognition();
  }

  //#region Foreign Entities
	
	//#region -- CriticalIncident --

  criticalIncidentComponent : ForeignComponent<CriticalIncident> = new ForeignComponent<CriticalIncident>(this.criticalIncidentRecognitionService.CriticalIncidentService);

  @Input()
  public set CriticalIncident(value: CriticalIncident) {
    this.currentInstance.criticalIncident = this.criticalIncidentComponent.instance = value;
  }  


  //#endregion -- CriticalIncident --
	//#region -- Writer --

  writerComponent : ForeignComponent<Employee> = new ForeignComponent<Employee>(this.criticalIncidentRecognitionService.EmployeeService);

  @Input()
  public set Writer(value: Employee) {
    this.currentInstance.writer = this.writerComponent.instance = value;
  }  


  //#endregion -- Writer --
	//#endregion

  @ViewChild('criticalIncidentRecognitionEditUI')
  private criticalIncidentRecognitionEditUI: NgForm;

  Init(criticalIncidentRecognition: CriticalIncidentRecognition = new CriticalIncidentRecognition()) {
    if (criticalIncidentRecognition.isNew)
      this.criticalIncidentRecognitionEditUI.reset();
    this.InitCriticalIncidentRecognition(criticalIncidentRecognition);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitCriticalIncidentRecognition(criticalIncidentRecognition: CriticalIncidentRecognition){
    this.currentInstance = this.service.CreateInstance();
    if (!criticalIncidentRecognition.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.criticalIncidentComponent.instance = criticalIncidentRecognition.criticalIncident;
			this.writerComponent.instance = criticalIncidentRecognition.writer;
    } else {
      criticalIncidentRecognition.criticalIncident = this.criticalIncidentComponent.instance;
			criticalIncidentRecognition.writer = this.writerComponent.instance;
    }
    this.currentInstance = criticalIncidentRecognition;
  }

  ResetForm() {
    this.CriticalIncident = new CriticalIncident();
		this.Writer = new Employee();
  }
}