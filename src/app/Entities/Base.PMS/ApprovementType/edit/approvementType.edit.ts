import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { ApprovementType } from '../approvementType';
import { ApprovementTypeService } from '../approvementType.service';



@Component({
  selector: 'base-pms-approvementType-edit',
  templateUrl: './approvementType.edit.html',
  styleUrls: ['./approvementType.edit.css']
})
export class ApprovementTypeEditUI extends EditModal<ApprovementType> implements IEditModal<ApprovementType>  {
  
  constructor(private approvementTypeService: ApprovementTypeService) {
    super(approvementTypeService); 
    this.currentInstance = new ApprovementType();
  }

  

  @ViewChild('approvementTypeEditUI')
  private approvementTypeEditUI: NgForm;

  Init(approvementType: ApprovementType = new ApprovementType()) {
    if (approvementType.isNew)
      this.approvementTypeEditUI.reset();
    this.InitApprovementType(approvementType);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitApprovementType(approvementType: ApprovementType) {
    if (!approvementType.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = approvementType;
  }

  ResetForm() {
    
  }
}