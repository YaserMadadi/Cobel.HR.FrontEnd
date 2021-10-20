

import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { TargetSettingType } from '../targetSettingType';
import { TargetSettingTypeService } from '../targetSettingType.service';



@Component({
  selector: 'base-pms-targetSettingType-edit',
  templateUrl: './targetSettingType.edit.html',
  styleUrls: ['./targetSettingType.edit.css']
})
export class TargetSettingTypeEditUI extends EditModal<TargetSettingType> implements IEditModal<TargetSettingType>  {
  
  constructor(private targetSettingTypeService: TargetSettingTypeService) {
    super(targetSettingTypeService); 
    this.currentInstance = new TargetSettingType();
  }

  

  @ViewChild('targetSettingTypeEditUI')
  private targetSettingTypeEditUI: NgForm;

  Init(targetSettingType: TargetSettingType = new TargetSettingType()) {
    if (targetSettingType.isNew)
      this.targetSettingTypeEditUI.reset();
    this.InitTargetSettingType(targetSettingType);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitTargetSettingType(targetSettingType: TargetSettingType) {
    if (!targetSettingType.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = targetSettingType;
  }

  ResetForm() {
    
  }
}
