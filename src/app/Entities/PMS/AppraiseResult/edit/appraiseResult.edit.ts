import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { AppraiseResult } from '../appraiseResult';
import { AppraiseResultService } from '../appraiseResult.service';
import { TargetSetting } from '../../TargetSetting/targetSetting';
import { TargetSettingEditUI } from '../../TargetSetting/edit/targetSetting.edit';
import { AppraiseType } from '../../../Base.PMS/AppraiseType/appraiseType';
import { AppraiseTypeEditUI } from '../../../Base.PMS/AppraiseType/edit/appraiseType.edit';
import { AppraiseTime } from '../../../Base.PMS/AppraiseTime/appraiseTime';
import { AppraiseTimeEditUI } from '../../../Base.PMS/AppraiseTime/edit/appraiseTime.edit';



@Component({
  selector: 'pms-appraiseResult-edit',
  templateUrl: './appraiseResult.edit.html',
  styleUrls: ['./appraiseResult.edit.css']
})
export class AppraiseResultEditUI extends EditModal<AppraiseResult> implements IEditModal<AppraiseResult>  {
  
  constructor(private appraiseResultService: AppraiseResultService) {
    super(appraiseResultService); 
    this.currentInstance = new AppraiseResult();
  }

  //#region Foreign Entities
	
	//#region -- TargetSetting --

  targetSettingComponent : ForeignComponent<TargetSetting> = new ForeignComponent<TargetSetting>(this.appraiseResultService.TargetSettingService);

  @Input()
  public set TargetSetting(value: TargetSetting) {
    this.currentInstance.targetSetting = this.targetSettingComponent.instance = value;
  }  


  //#endregion -- TargetSetting --
	//#region -- AppraiseType --

  appraiseTypeComponent : ForeignComponent<AppraiseType> = new ForeignComponent<AppraiseType>(this.appraiseResultService.AppraiseTypeService);

  @Input()
  public set AppraiseType(value: AppraiseType) {
    this.currentInstance.appraiseType = this.appraiseTypeComponent.instance = value;
  }  


  //#endregion -- AppraiseType --
	//#region -- AppraiseTime --

  appraiseTimeComponent : ForeignComponent<AppraiseTime> = new ForeignComponent<AppraiseTime>(this.appraiseResultService.AppraiseTimeService);

  @Input()
  public set AppraiseTime(value: AppraiseTime) {
    this.currentInstance.appraiseTime = this.appraiseTimeComponent.instance = value;
  }  


  //#endregion -- AppraiseTime --
	//#endregion

  @ViewChild('appraiseResultEditUI')
  private appraiseResultEditUI: NgForm;

  Init(appraiseResult: AppraiseResult = new AppraiseResult()) {
    if (appraiseResult.isNew)
      this.appraiseResultEditUI.reset();
    this.InitAppraiseResult(appraiseResult);
    this.loadLists();
  }

  private loadLists() {
    
    this.appraiseTypeComponent.LoadList();
		this.appraiseTimeComponent.LoadList();
  }
  
  InitAppraiseResult(appraiseResult: AppraiseResult) {
    if (!appraiseResult.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.targetSettingComponent.instance = appraiseResult.targetSetting;
			this.appraiseTypeComponent.instance = appraiseResult.appraiseType;
			this.appraiseTimeComponent.instance = appraiseResult.appraiseTime;
    } else {
      appraiseResult.targetSetting = this.targetSettingComponent.instance;
			appraiseResult.appraiseType = this.appraiseTypeComponent.instance;
			appraiseResult.appraiseTime = this.appraiseTimeComponent.instance;
    }
    this.currentInstance = appraiseResult;
  }

  ResetForm() {
    this.TargetSetting = new TargetSetting();
		this.AppraiseType = new AppraiseType();
		this.AppraiseTime = new AppraiseTime();
  }
}