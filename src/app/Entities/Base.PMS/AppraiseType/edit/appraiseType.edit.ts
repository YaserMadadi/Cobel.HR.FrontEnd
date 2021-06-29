import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { AppraiseType } from '../appraiseType';
import { AppraiseTypeService } from '../appraiseType.service';



@Component({
  selector: 'base-pms-appraiseType-edit',
  templateUrl: './appraiseType.edit.html',
  styleUrls: ['./appraiseType.edit.css']
})
export class AppraiseTypeEditUI extends EditModal<AppraiseType> implements IEditModal<AppraiseType>  {
  
  constructor(private appraiseTypeService: AppraiseTypeService) {
    super(appraiseTypeService); 
    this.currentInstance = new AppraiseType();
  }

  

  @ViewChild('appraiseTypeEditUI')
  private appraiseTypeEditUI: NgForm;

  Init(appraiseType: AppraiseType = new AppraiseType()) {
    if (appraiseType.isNew)
      this.appraiseTypeEditUI.reset();
    this.InitAppraiseType(appraiseType);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitAppraiseType(appraiseType: AppraiseType) {
    if (!appraiseType.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = appraiseType;
  }

  ResetForm() {
    
  }
}