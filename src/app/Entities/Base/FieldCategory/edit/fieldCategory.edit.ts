import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { FieldCategory } from '../fieldCategory';
import { FieldCategoryService } from '../fieldCategory.service';



@Component({
  selector: 'base-fieldCategory-edit',
  templateUrl: './fieldCategory.edit.html',
  styleUrls: ['./fieldCategory.edit.css']
})
export class FieldCategoryEditUI extends EditModal<FieldCategory> implements IEditModal<FieldCategory>  {
  
  constructor(private fieldCategoryService: FieldCategoryService) {
    super(fieldCategoryService); 
    this.currentInstance = new FieldCategory();
  }

  

  @ViewChild('fieldCategoryEditUI')
  private fieldCategoryEditUI: NgForm;

  Init(fieldCategory: FieldCategory = new FieldCategory()) {
    if (fieldCategory.isNew)
      this.fieldCategoryEditUI.reset();
    this.InitFieldCategory(fieldCategory);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitFieldCategory(fieldCategory: FieldCategory) {
    if (!fieldCategory.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = fieldCategory;
  }

  ResetForm() {
    
  }
}