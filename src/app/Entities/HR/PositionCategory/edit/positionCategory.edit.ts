import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { PositionCategory } from '../positionCategory';
import { PositionCategoryService } from '../positionCategory.service';



@Component({
  selector: 'hr-positionCategory-edit',
  templateUrl: './positionCategory.edit.html',
  styleUrls: ['./positionCategory.edit.css']
})
export class PositionCategoryEditUI extends EditModal<PositionCategory> implements IEditModal<PositionCategory>  {
  
  constructor(private positionCategoryService: PositionCategoryService) {
    super(positionCategoryService); 
    this.currentInstance = new PositionCategory();
  }

  

  @ViewChild('positionCategoryEditUI')
  private positionCategoryEditUI: NgForm;

  Init(positionCategory: PositionCategory = new PositionCategory()) {
    if (positionCategory.isNew)
      this.positionCategoryEditUI.reset();
    this.InitPositionCategory(positionCategory);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitPositionCategory(positionCategory: PositionCategory) {
    if (!positionCategory.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = positionCategory;
  }

  ResetForm() {
    
  }
}