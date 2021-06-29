import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { InclusiveType } from '../inclusiveType';
import { InclusiveTypeService } from '../inclusiveType.service';



@Component({
  selector: 'base-inclusiveType-edit',
  templateUrl: './inclusiveType.edit.html',
  styleUrls: ['./inclusiveType.edit.css']
})
export class InclusiveTypeEditUI extends EditModal<InclusiveType> implements IEditModal<InclusiveType>  {
  
  constructor(private inclusiveTypeService: InclusiveTypeService) {
    super(inclusiveTypeService); 
    this.currentInstance = new InclusiveType();
  }

  

  @ViewChild('inclusiveTypeEditUI')
  private inclusiveTypeEditUI: NgForm;

  Init(inclusiveType: InclusiveType = new InclusiveType()) {
    if (inclusiveType.isNew)
      this.inclusiveTypeEditUI.reset();
    this.InitInclusiveType(inclusiveType);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitInclusiveType(inclusiveType: InclusiveType) {
    if (!inclusiveType.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = inclusiveType;
  }

  ResetForm() {
    
  }
}