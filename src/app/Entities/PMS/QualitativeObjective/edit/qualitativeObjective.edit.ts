import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { QualitativeObjective } from '../qualitativeObjective';
import { QualitativeObjectiveService } from '../qualitativeObjective.service';
import { TargetSetting } from '../../TargetSetting/targetSetting';
import { TargetSettingEditUI } from '../../TargetSetting/edit/targetSetting.edit';



@Component({
  selector: 'pms-qualitativeObjective-edit',
  templateUrl: './qualitativeObjective.edit.html',
  styleUrls: ['./qualitativeObjective.edit.css']
})
export class QualitativeObjectiveEditUI extends EditModal<QualitativeObjective> implements IEditModal<QualitativeObjective>  {
  
  constructor(private qualitativeObjectiveService: QualitativeObjectiveService) {
    super(qualitativeObjectiveService); 
    this.currentInstance = new QualitativeObjective();
  }

  //#region Foreign Entities
	
	//#region -- TargetSetting --

  targetSettingComponent : ForeignComponent<TargetSetting> = new ForeignComponent<TargetSetting>(this.qualitativeObjectiveService.TargetSettingService);

  @Input()
  public set TargetSetting(value: TargetSetting) {
    this.currentInstance.targetSetting = this.targetSettingComponent.instance = value;
  }  


  //#endregion -- TargetSetting --
	//#endregion

  @ViewChild('qualitativeObjectiveEditUI')
  private qualitativeObjectiveEditUI: NgForm;

  Init(qualitativeObjective: QualitativeObjective = new QualitativeObjective()) {
    if (qualitativeObjective.isNew)
      this.qualitativeObjectiveEditUI.reset();
    this.InitQualitativeObjective(qualitativeObjective);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitQualitativeObjective(qualitativeObjective: QualitativeObjective){
    this.currentInstance = this.service.CreateInstance();
    if (!qualitativeObjective.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.targetSettingComponent.instance = qualitativeObjective.targetSetting;
    } else {
      qualitativeObjective.targetSetting = this.targetSettingComponent.instance;
    }
    this.currentInstance = qualitativeObjective;
  }

  ResetForm() {
    this.TargetSetting = new TargetSetting();
  }
}