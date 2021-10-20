import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { DevelopmentPlanPriority } from '../developmentPlanPriority';
import { DevelopmentPlanPriorityService } from '../developmentPlanPriority.service';



@Component({
  selector: 'base-pms-developmentPlanPriority-edit',
  templateUrl: './developmentPlanPriority.edit.html',
  styleUrls: ['./developmentPlanPriority.edit.css']
})
export class DevelopmentPlanPriorityEditUI extends EditModal<DevelopmentPlanPriority> implements IEditModal<DevelopmentPlanPriority>  {
  
  constructor(private developmentPlanPriorityService: DevelopmentPlanPriorityService) {
    super(developmentPlanPriorityService); 
    this.currentInstance = new DevelopmentPlanPriority();
  }

  

  @ViewChild('developmentPlanPriorityEditUI')
  private developmentPlanPriorityEditUI: NgForm;

  Init(developmentPlanPriority: DevelopmentPlanPriority = new DevelopmentPlanPriority()) {
    if (developmentPlanPriority.isNew)
      this.developmentPlanPriorityEditUI.reset();
    this.InitDevelopmentPlanPriority(developmentPlanPriority);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitDevelopmentPlanPriority(developmentPlanPriority: DevelopmentPlanPriority){
    this.currentInstance = this.service.CreateInstance();
    if (!developmentPlanPriority.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = developmentPlanPriority;
  }

  ResetForm() {
    
  }
}