import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { NonOperationalAppraise } from '../nonOperationalAppraise';
import { NonOperationalAppraiseService } from '../nonOperationalAppraise.service';
import { TargetSetting } from '../../TargetSetting/targetSetting';
import { TargetSettingEditUI } from '../../TargetSetting/edit/targetSetting.edit';
import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';
import { ScoreCell } from '../../ScoreCell/scoreCell';
import { ScoreCellEditUI } from '../../ScoreCell/edit/scoreCell.edit';



@Component({
  selector: 'pms-nonOperationalAppraise-edit',
  templateUrl: './nonOperationalAppraise.edit.html',
  styleUrls: ['./nonOperationalAppraise.edit.css']
})
export class NonOperationalAppraiseEditUI extends EditModal<NonOperationalAppraise> implements IEditModal<NonOperationalAppraise>  {
  
  constructor(private nonOperationalAppraiseService: NonOperationalAppraiseService) {
    super(nonOperationalAppraiseService); 
    this.currentInstance = new NonOperationalAppraise();
  }

  //#region Foreign Entities
	
	//#region -- TargetSetting --

  targetSettingComponent : ForeignComponent<TargetSetting> = new ForeignComponent<TargetSetting>(this.nonOperationalAppraiseService.TargetSettingService);

  @Input()
  public set TargetSetting(value: TargetSetting) {
    this.currentInstance.targetSetting = this.targetSettingComponent.instance = value;
  }  


  //#endregion -- TargetSetting --
	//#region -- Approver --

  approverComponent : ForeignComponent<Employee> = new ForeignComponent<Employee>(this.nonOperationalAppraiseService.EmployeeService);

  @Input()
  public set Approver(value: Employee) {
    this.currentInstance.approver = this.approverComponent.instance = value;
  }  


  //#endregion -- Approver --
	//#region -- ScoreCell --

  scoreCellComponent : ForeignComponent<ScoreCell> = new ForeignComponent<ScoreCell>(this.nonOperationalAppraiseService.ScoreCellService);

  @Input()
  public set ScoreCell(value: ScoreCell) {
    this.currentInstance.scoreCell = this.scoreCellComponent.instance = value;
  }  


  //#endregion -- ScoreCell --
	//#endregion

  @ViewChild('nonOperationalAppraiseEditUI')
  private nonOperationalAppraiseEditUI: NgForm;

  Init(nonOperationalAppraise: NonOperationalAppraise = new NonOperationalAppraise()) {
    if (nonOperationalAppraise.isNew)
      this.nonOperationalAppraiseEditUI.reset();
    this.InitNonOperationalAppraise(nonOperationalAppraise);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitNonOperationalAppraise(nonOperationalAppraise: NonOperationalAppraise){
    this.currentInstance = this.service.CreateInstance();
    if (!nonOperationalAppraise.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.targetSettingComponent.instance = nonOperationalAppraise.targetSetting;
			this.approverComponent.instance = nonOperationalAppraise.approver;
			this.scoreCellComponent.instance = nonOperationalAppraise.scoreCell;
    } else {
      nonOperationalAppraise.targetSetting = this.targetSettingComponent.instance;
			nonOperationalAppraise.approver = this.approverComponent.instance;
			nonOperationalAppraise.scoreCell = this.scoreCellComponent.instance;
    }
    this.currentInstance = nonOperationalAppraise;
  }

  ResetForm() {
    this.TargetSetting = new TargetSetting();
		this.Approver = new Employee();
		this.ScoreCell = new ScoreCell();
  }
}