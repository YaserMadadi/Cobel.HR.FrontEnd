import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { ConclusionType } from '../conclusionType';
import { ConclusionTypeService } from '../conclusionType.service';



@Component({
  selector: 'lad-conclusionType-edit',
  templateUrl: './conclusionType.edit.html',
  styleUrls: ['./conclusionType.edit.css']
})
export class ConclusionTypeEditUI extends EditModal<ConclusionType> implements IEditModal<ConclusionType>  {
  
  constructor(private conclusionTypeService: ConclusionTypeService) {
    super(conclusionTypeService); 
    this.currentInstance = new ConclusionType();
  }

  

  @ViewChild('conclusionTypeEditUI')
  private conclusionTypeEditUI: NgForm;

  Init(conclusionType: ConclusionType = new ConclusionType()) {
    if (conclusionType.isNew)
      this.conclusionTypeEditUI.reset();
    this.InitConclusionType(conclusionType);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitConclusionType(conclusionType: ConclusionType) {
    if (!conclusionType.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = conclusionType;
  }

  ResetForm() {
    
  }
}