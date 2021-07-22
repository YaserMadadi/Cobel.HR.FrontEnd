import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { FinalAppraise } from '../finalAppraise';
import { FinalAppraiseService } from '../finalAppraise.service';
import { TargetSetting } from '../../TargetSetting/targetSetting';
import { TargetSettingEditUI } from '../../TargetSetting/edit/targetSetting.edit';



@Component({
  selector: 'pms-finalAppraise-edit',
  templateUrl: './finalAppraise.edit.html',
  styleUrls: ['./finalAppraise.edit.css']
})
export class FinalAppraiseEditUI extends EditModal<FinalAppraise> implements IEditModal<FinalAppraise>  {

  constructor(private finalAppraiseService: FinalAppraiseService) {
    super(finalAppraiseService);
    this.currentInstance = new FinalAppraise();

  }

  //#region Foreign Entities

  //#region -- TargetSetting --

  targetSettingComponent: ForeignComponent<TargetSetting> = new ForeignComponent<TargetSetting>(this.finalAppraiseService.TargetSettingService);

  @Input()
  public set TargetSetting(value: TargetSetting) {
    this.currentInstance.targetSetting = this.targetSettingComponent.instance = value;
  }


  //#endregion -- TargetSetting --
  //#endregion

  @ViewChild('finalAppraiseEditUI')
  private finalAppraiseEditUI: NgForm;

  Init(finalAppraise: FinalAppraise = new FinalAppraise()) {
    if (finalAppraise.isNew)
      this.finalAppraiseEditUI.reset();
    this.InitFinalAppraise(finalAppraise);
    this.loadLists();
  }

  get functionalMinValue(): number {
    return this.currentInstance.managerFunctionalScore - (this.currentInstance.managerFunctionalScore * 0.1);
  }

  get functionalMaxValue(): number {
    return this.currentInstance.managerFunctionalScore + (this.currentInstance.managerFunctionalScore * 0.1);
  }

  get behavioralMinValue(): number {
    return this.currentInstance.managerBehavioralScore - (this.currentInstance.managerBehavioralScore * 0.1);
  }

  get behavioralMaxValue(): number {
    return this.currentInstance.managerBehavioralScore + (this.currentInstance.managerBehavioralScore * 0.1);
  }

  private loadLists() {


  }

  InitFinalAppraise(finalAppraise: FinalAppraise) {
    if (!finalAppraise.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.targetSettingComponent.instance = finalAppraise.targetSetting;
    } else {
      finalAppraise.targetSetting = this.targetSettingComponent.instance;
    }
    this.currentInstance = finalAppraise;
  }

  ResetForm() {
    this.TargetSetting = new TargetSetting();
  }
}