import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { ExcemptionType } from '../excemptionType';
import { ExcemptionTypeService } from '../excemptionType.service';



@Component({
  selector: 'base-excemptionType-edit',
  templateUrl: './excemptionType.edit.html',
  styleUrls: ['./excemptionType.edit.css']
})
export class ExcemptionTypeEditUI extends EditModal<ExcemptionType> implements IEditModal<ExcemptionType>  {
  
  constructor(private excemptionTypeService: ExcemptionTypeService) {
    super(excemptionTypeService); 
    this.currentInstance = new ExcemptionType();
  }

  

  @ViewChild('excemptionTypeEditUI')
  private excemptionTypeEditUI: NgForm;

  Init(excemptionType: ExcemptionType = new ExcemptionType()) {
    if (excemptionType.isNew)
      this.excemptionTypeEditUI.reset();
    this.InitExcemptionType(excemptionType);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitExcemptionType(excemptionType: ExcemptionType){
    this.currentInstance = this.service.CreateInstance();
    if (!excemptionType.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = excemptionType;
  }

  ResetForm() {
    
  }
}