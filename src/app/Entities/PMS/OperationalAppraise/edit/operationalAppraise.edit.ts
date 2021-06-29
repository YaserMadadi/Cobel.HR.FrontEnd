import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { OperationalAppraise } from '../operationalAppraise';
import { OperationalAppraiseService } from '../operationalAppraise.service';
import { TargetSetting } from '../../TargetSetting/targetSetting';
import { TargetSettingEditUI } from '../../TargetSetting/edit/targetSetting.edit';
import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';
import { ScoreCell } from '../../ScoreCell/scoreCell';
import { ScoreCellEditUI } from '../../ScoreCell/edit/scoreCell.edit';



@Component({
  selector: 'pms-operationalAppraise-edit',
  templateUrl: './operationalAppraise.edit.html',
  styleUrls: ['./operationalAppraise.edit.css']
})
export class OperationalAppraiseEditUI extends EditModal<OperationalAppraise> implements IEditModal<OperationalAppraise>  {
  
  constructor(private operationalAppraiseService: OperationalAppraiseService) {
    super(operationalAppraiseService); 
    this.currentInstance = new OperationalAppraise();
  }

  //#region Foreign Entities
	
	//#region -- TargetSetting --

  targetSettingComponent : ForeignComponent<TargetSetting> = new ForeignComponent<TargetSetting>(this.operationalAppraiseService.TargetSettingService);

  @Input()
  public set TargetSetting(value: TargetSetting) {
    this.currentInstance.targetSetting = this.targetSettingComponent.instance = value;
  }  


  //#endregion -- TargetSetting --
	//#region -- Approver --

  approverComponent : ForeignComponent<Employee> = new ForeignComponent<Employee>(this.operationalAppraiseService.EmployeeService);

  @Input()
  public set Approver(value: Employee) {
    this.currentInstance.approver = this.approverComponent.instance = value;
  }  


  //#endregion -- Approver --
	//#region -- ScoreCell --

  scoreCellComponent : ForeignComponent<ScoreCell> = new ForeignComponent<ScoreCell>(this.operationalAppraiseService.ScoreCellService);

  @Input()
  public set ScoreCell(value: ScoreCell) {
    this.currentInstance.scoreCell = this.scoreCellComponent.instance = value;
  }  


  //#endregion -- ScoreCell --
	//#endregion

  @ViewChild('operationalAppraiseEditUI')
  private operationalAppraiseEditUI: NgForm;

  Init(operationalAppraise: OperationalAppraise = new OperationalAppraise()) {
    if (operationalAppraise.isNew)
      this.operationalAppraiseEditUI.reset();
    this.InitOperationalAppraise(operationalAppraise);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitOperationalAppraise(operationalAppraise: OperationalAppraise) {
    if (!operationalAppraise.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.targetSettingComponent.instance = operationalAppraise.targetSetting;
			this.approverComponent.instance = operationalAppraise.approver;
			this.scoreCellComponent.instance = operationalAppraise.scoreCell;
    } else {
      operationalAppraise.targetSetting = this.targetSettingComponent.instance;
			operationalAppraise.approver = this.approverComponent.instance;
			operationalAppraise.scoreCell = this.scoreCellComponent.instance;
    }
    this.currentInstance = operationalAppraise;
  }

  ResetForm() {
    this.TargetSetting = new TargetSetting();
		this.Approver = new Employee();
		this.ScoreCell = new ScoreCell();
  }
}