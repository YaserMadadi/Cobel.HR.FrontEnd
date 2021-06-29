import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { RelativeType } from '../relativeType';
import { RelativeTypeService } from '../relativeType.service';



@Component({
  selector: 'base-hr-relativeType-edit',
  templateUrl: './relativeType.edit.html',
  styleUrls: ['./relativeType.edit.css']
})
export class RelativeTypeEditUI extends EditModal<RelativeType> implements IEditModal<RelativeType>  {
  
  constructor(private relativeTypeService: RelativeTypeService) {
    super(relativeTypeService); 
    this.currentInstance = new RelativeType();
  }

  

  @ViewChild('relativeTypeEditUI')
  private relativeTypeEditUI: NgForm;

  Init(relativeType: RelativeType = new RelativeType()) {
    if (relativeType.isNew)
      this.relativeTypeEditUI.reset();
    this.InitRelativeType(relativeType);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitRelativeType(relativeType: RelativeType) {
    if (!relativeType.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = relativeType;
  }

  ResetForm() {
    
  }
}