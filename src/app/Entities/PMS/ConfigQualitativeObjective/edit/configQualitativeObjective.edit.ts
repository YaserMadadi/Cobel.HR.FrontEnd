import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { ConfigQualitativeObjective } from '../configQualitativeObjective';
import { ConfigQualitativeObjectiveService } from '../configQualitativeObjective.service';
import { ConfigTargetSetting } from '../../ConfigTargetSetting/configTargetSetting';
import { ConfigTargetSettingEditUI } from '../../ConfigTargetSetting/edit/configTargetSetting.edit';



@Component({
  selector: 'pms-configQualitativeObjective-edit',
  templateUrl: './configQualitativeObjective.edit.html',
  styleUrls: ['./configQualitativeObjective.edit.css']
})
export class ConfigQualitativeObjectiveEditUI extends EditModal<ConfigQualitativeObjective> implements IEditModal<ConfigQualitativeObjective>  {
  
  constructor(private configQualitativeObjectiveService: ConfigQualitativeObjectiveService) {
    super(configQualitativeObjectiveService); 
    this.currentInstance = new ConfigQualitativeObjective();
  }

  //#region Foreign Entities
	
	//#region -- TargetSettingConfig --

  targetSettingConfigComponent : ForeignComponent<ConfigTargetSetting> = new ForeignComponent<ConfigTargetSetting>(this.configQualitativeObjectiveService.ConfigTargetSettingService);

  @Input()
  public set TargetSettingConfig(value: ConfigTargetSetting) {
    this.currentInstance.configTargetSetting = this.targetSettingConfigComponent.instance = value;
  }  


  //#endregion -- TargetSettingConfig --
	//#endregion

  @ViewChild('configQualitativeObjectiveEditUI')
  private configQualitativeObjectiveEditUI: NgForm;

  Init(configQualitativeObjective: ConfigQualitativeObjective = new ConfigQualitativeObjective()) {
    if (configQualitativeObjective.isNew)
      this.configQualitativeObjectiveEditUI.reset();
    this.InitConfigQualitativeObjective(configQualitativeObjective);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitConfigQualitativeObjective(configQualitativeObjective: ConfigQualitativeObjective){
    this.currentInstance = this.service.CreateInstance();
    if (!configQualitativeObjective.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.targetSettingConfigComponent.instance = configQualitativeObjective.configTargetSetting;
    } else {
      configQualitativeObjective.configTargetSetting = this.targetSettingConfigComponent.instance;
    }
    this.currentInstance = configQualitativeObjective;
  }

  ResetForm() {
    this.TargetSettingConfig = new ConfigTargetSetting();
  }
}