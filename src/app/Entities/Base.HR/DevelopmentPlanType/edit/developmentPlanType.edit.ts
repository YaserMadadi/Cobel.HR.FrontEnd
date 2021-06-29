import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { DevelopmentPlanType } from '../developmentPlanType';
import { DevelopmentPlanTypeService } from '../developmentPlanType.service';



@Component({
  selector: 'base-hr-developmentPlanType-edit',
  templateUrl: './developmentPlanType.edit.html',
  styleUrls: ['./developmentPlanType.edit.css']
})
export class DevelopmentPlanTypeEditUI extends EditModal<DevelopmentPlanType> implements IEditModal<DevelopmentPlanType>  {
  
  constructor(private developmentPlanTypeService: DevelopmentPlanTypeService) {
    super(developmentPlanTypeService); 
    this.currentInstance = new DevelopmentPlanType();
  }

  

  @ViewChild('developmentPlanTypeEditUI')
  private developmentPlanTypeEditUI: NgForm;

  Init(developmentPlanType: DevelopmentPlanType = new DevelopmentPlanType()) {
    if (developmentPlanType.isNew)
      this.developmentPlanTypeEditUI.reset();
    this.InitDevelopmentPlanType(developmentPlanType);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitDevelopmentPlanType(developmentPlanType: DevelopmentPlanType) {
    if (!developmentPlanType.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = developmentPlanType;
  }

  ResetForm() {
    
  }
}