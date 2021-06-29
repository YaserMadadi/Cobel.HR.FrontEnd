import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { ConfigTargetSetting } from '../configTargetSetting';
import { ConfigTargetSettingService } from '../configTargetSetting.service';
import { Position } from '../../../HR/Position/position';
import { PositionEditUI } from '../../../HR/Position/edit/position.edit';



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
	
	//#region -- Position --

  positionComponent : ForeignComponent<Position> = new ForeignComponent<Position>(this.configTargetSettingService.PositionService);

  @Input()
  public set Position(value: Position) {
    this.currentInstance.position = this.positionComponent.instance = value;
  }  


  //#endregion -- Position --
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
  
  InitConfigTargetSetting(configTargetSetting: ConfigTargetSetting) {
    if (!configTargetSetting.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.positionComponent.instance = configTargetSetting.position;
    } else {
      configTargetSetting.position = this.positionComponent.instance;
    }
    this.currentInstance = configTargetSetting;
  }

  ResetForm() {
    this.Position = new Position();
  }
}