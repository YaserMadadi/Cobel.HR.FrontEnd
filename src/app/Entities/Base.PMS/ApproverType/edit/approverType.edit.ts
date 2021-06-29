import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { ApproverType } from '../approverType';
import { ApproverTypeService } from '../approverType.service';



@Component({
  selector: 'base-pms-approverType-edit',
  templateUrl: './approverType.edit.html',
  styleUrls: ['./approverType.edit.css']
})
export class ApproverTypeEditUI extends EditModal<ApproverType> implements IEditModal<ApproverType>  {
  
  constructor(private approverTypeService: ApproverTypeService) {
    super(approverTypeService); 
    this.currentInstance = new ApproverType();
  }

  

  @ViewChild('approverTypeEditUI')
  private approverTypeEditUI: NgForm;

  Init(approverType: ApproverType = new ApproverType()) {
    if (approverType.isNew)
      this.approverTypeEditUI.reset();
    this.InitApproverType(approverType);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitApproverType(approverType: ApproverType) {
    if (!approverType.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = approverType;
  }

  ResetForm() {
    
  }
}