

import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { TargetSettingMode } from '../targetSettingMode';
import { TargetSettingModeService } from '../targetSettingMode.service';



@Component({
  selector: 'base-pms-targetSettingMode-edit',
  templateUrl: './targetSettingMode.edit.html',
  styleUrls: ['./targetSettingMode.edit.css']
})
export class TargetSettingModeEditUI extends EditModal<TargetSettingMode> implements IEditModal<TargetSettingMode>  {
  
  constructor(private targetSettingModeService: TargetSettingModeService) {
    super(targetSettingModeService); 
    this.currentInstance = new TargetSettingMode();
  }

  

  @ViewChild('targetSettingModeEditUI')
  private targetSettingModeEditUI: NgForm;

  Init(targetSettingMode: TargetSettingMode = new TargetSettingMode()) {
    if (targetSettingMode.isNew)
      this.targetSettingModeEditUI.reset();
    this.InitTargetSettingMode(targetSettingMode);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitTargetSettingMode(targetSettingMode: TargetSettingMode) {
    if (!targetSettingMode.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = targetSettingMode;
  }

  ResetForm() {
    
  }
}
