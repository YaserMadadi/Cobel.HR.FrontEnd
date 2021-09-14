import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { FinalApprovement } from '../finalApprovement';
import { FinalApprovementService } from '../finalApprovement.service';
import { TargetSetting } from '../../TargetSetting/targetSetting';
import { TargetSettingEditUI } from '../../TargetSetting/edit/targetSetting.edit';
import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';



@Component({
  selector: 'pms-finalApprovement-edit',
  templateUrl: './finalApprovement.edit.html',
  styleUrls: ['./finalApprovement.edit.css']
})
export class FinalApprovementEditUI extends EditModal<FinalApprovement> implements IEditModal<FinalApprovement>  {
  
  constructor(private finalApprovementService: FinalApprovementService) {
    super(finalApprovementService); 
    this.currentInstance = new FinalApprovement();
  }

  //#region Foreign Entities
	
	//#region -- TargetSetting --

  targetSettingComponent : ForeignComponent<TargetSetting> = new ForeignComponent<TargetSetting>(this.finalApprovementService.TargetSettingService);

  @Input()
  public set TargetSetting(value: TargetSetting) {
    this.currentInstance.targetSetting = this.targetSettingComponent.instance = value;
  }  


  //#endregion -- TargetSetting --
	//#region -- Approver --

  approverComponent : ForeignComponent<Employee> = new ForeignComponent<Employee>(this.finalApprovementService.EmployeeService);

  @Input()
  public set Approver(value: Employee) {
    this.currentInstance.approver = this.approverComponent.instance = value;
  }  


  //#endregion -- Approver --
	//#endregion

  @ViewChild('finalApprovementEditUI')
  private finalApprovementEditUI: NgForm;

  Init(finalApprovement: FinalApprovement = new FinalApprovement()) {
    if (finalApprovement.isNew)
      this.finalApprovementEditUI.reset();
    this.InitFinalApprovement(finalApprovement);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitFinalApprovement(finalApprovement: FinalApprovement){
    this.currentInstance = this.service.CreateInstance();
    if (!finalApprovement.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.targetSettingComponent.instance = finalApprovement.targetSetting;
			this.approverComponent.instance = finalApprovement.approver;
    } else {
      finalApprovement.targetSetting = this.targetSettingComponent.instance;
			finalApprovement.approver = this.approverComponent.instance;
    }
    this.currentInstance = finalApprovement;
  }

  ResetForm() {
    this.TargetSetting = new TargetSetting();
		this.Approver = new Employee();
  }
}