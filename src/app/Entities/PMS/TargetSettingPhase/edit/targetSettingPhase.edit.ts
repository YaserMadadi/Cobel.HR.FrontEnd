

import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { TargetSettingPhase } from '../targetSettingPhase';
import { TargetSettingPhaseService } from '../targetSettingPhase.service';
import { Year } from '../../../Base/Year/year';
import { YearEditUI } from '../../../Base/Year/edit/year.edit';
import { TargetSettingType } from '../../../Base.PMS/TargetSettingType/targetSettingType';
import { TargetSettingTypeEditUI } from '../../../Base.PMS/TargetSettingType/edit/targetSettingType.edit';
import { TargetSettingMode } from '../../../Base.PMS/TargetSettingMode/targetSettingMode';
import { TargetSettingModeEditUI } from '../../../Base.PMS/TargetSettingMode/edit/targetSettingMode.edit';



@Component({
  selector: 'pms-targetSettingPhase-edit',
  templateUrl: './targetSettingPhase.edit.html',
  styleUrls: ['./targetSettingPhase.edit.css']
})
export class TargetSettingPhaseEditUI extends EditModal<TargetSettingPhase> implements IEditModal<TargetSettingPhase>  {
  
  constructor(private targetSettingPhaseService: TargetSettingPhaseService) {
    super(targetSettingPhaseService); 
    this.currentInstance = new TargetSettingPhase();
  }

  //#region Foreign Entities
	
	//#region -- Year --

  yearComponent : ForeignComponent<Year> = new ForeignComponent<Year>(this.targetSettingPhaseService.YearService);

  @Input()
  public set Year(value: Year) {
    this.currentInstance.year = this.yearComponent.instance = value;
  }  


  //#endregion -- Year --
	//#region -- TargetSettingType --

  targetSettingTypeComponent : ForeignComponent<TargetSettingType> = new ForeignComponent<TargetSettingType>(this.targetSettingPhaseService.TargetSettingTypeService);

  @Input()
  public set TargetSettingType(value: TargetSettingType) {
    this.currentInstance.targetSettingType = this.targetSettingTypeComponent.instance = value;
  }  


  //#endregion -- TargetSettingType --
	//#region -- TargetSettingMode --

  targetSettingModeComponent : ForeignComponent<TargetSettingMode> = new ForeignComponent<TargetSettingMode>(this.targetSettingPhaseService.TargetSettingModeService);

  @Input()
  public set TargetSettingMode(value: TargetSettingMode) {
    this.currentInstance.targetSettingMode = this.targetSettingModeComponent.instance = value;
  }  


  //#endregion -- TargetSettingMode --
	//#endregion

  @ViewChild('targetSettingPhaseEditUI')
  private targetSettingPhaseEditUI: NgForm;

  Init(targetSettingPhase: TargetSettingPhase = new TargetSettingPhase()) {
    if (targetSettingPhase.isNew)
      this.targetSettingPhaseEditUI.reset();
    this.InitTargetSettingPhase(targetSettingPhase);
    this.loadLists();
  }

  private loadLists() {
    
    this.targetSettingTypeComponent.LoadList();
		this.targetSettingModeComponent.LoadList();
  }
  
  InitTargetSettingPhase(targetSettingPhase: TargetSettingPhase) {
    this.currentInstance = this.service.CreateInstance();
    if (!targetSettingPhase.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.yearComponent.instance = targetSettingPhase.year;
			this.targetSettingTypeComponent.instance = targetSettingPhase.targetSettingType;
			this.targetSettingModeComponent.instance = targetSettingPhase.targetSettingMode;
    } else {
      targetSettingPhase.year = this.yearComponent.instance;
			targetSettingPhase.targetSettingType = this.targetSettingTypeComponent.instance;
			targetSettingPhase.targetSettingMode = this.targetSettingModeComponent.instance;
    }
    this.currentInstance = targetSettingPhase;
  }

  async onSave(targetSettingPhase: TargetSettingPhase, editUI: NgForm, isContinue: boolean = false) {
   
    //// Pre Save Action Comes here...
   
    super.onSave(targetSettingPhase, editUI, isContinue);
  }

  ResetForm() {
    this.Year = new Year();
		this.TargetSettingType = new TargetSettingType();
		this.TargetSettingMode = new TargetSettingMode();
  }
}


