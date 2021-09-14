import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { ConfigTargetSetting } from '../configTargetSetting';
import { ConfigTargetSettingService } from '../configTargetSetting.service';
import { PositionCategory } from '../../../Base.HR/PositionCategory/positionCategory';
import { PositionCategoryEditUI } from '../../../Base.HR/PositionCategory/edit/positionCategory.edit';



@Component({
  selector: 'pms-configTargetSetting-edit',
  templateUrl: './configTargetSetting.edit.html',
  styleUrls: ['./configTargetSetting.edit.css']
})
export class ConfigTargetSettingEditUI extends EditModal<ConfigTargetSetting> implements IEditModal<ConfigTargetSetting>  {
  
  constructor(private configTargetSettingService: ConfigTargetSettingService) {
    super(configTargetSettingService); 
    this.currentInstance = new ConfigTargetSetting();
  }

  //#region Foreign Entities
	
	//#region -- positionCategory --

  positionCategoryComponent : ForeignComponent<PositionCategory> = new ForeignComponent<PositionCategory>(this.configTargetSettingService.positionCategoryService);

  @Input()
  public set positionCategory(value: PositionCategory) {
    this.currentInstance.positionCategory = this.positionCategoryComponent.instance = value;
  }  


  //#endregion -- positionCategory --
	//#endregion

  @ViewChild('configTargetSettingEditUI')
  private configTargetSettingEditUI: NgForm;

  Init(configTargetSetting: ConfigTargetSetting = new ConfigTargetSetting()) {
    if (configTargetSetting.isNew)
      this.configTargetSettingEditUI.reset();
    this.InitConfigTargetSetting(configTargetSetting);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitConfigTargetSetting(configTargetSetting: ConfigTargetSetting){
    this.currentInstance = this.service.CreateInstance();
    if (!configTargetSetting.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.positionCategoryComponent.instance = configTargetSetting.positionCategory;
    } else {
      configTargetSetting.positionCategory = this.positionCategoryComponent.instance;
    }
    this.currentInstance = configTargetSetting;
  }

  ResetForm() {
    this.positionCategory = new PositionCategory();
  }
}