import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { UniversityFieldCategory } from '../universityFieldCategory';
import { UniversityFieldCategoryService } from '../universityFieldCategory.service';



@Component({
  selector: 'base-universityFieldCategory-edit',
  templateUrl: './universityFieldCategory.edit.html',
  styleUrls: ['./universityFieldCategory.edit.css']
})
export class UniversityFieldCategoryEditUI extends EditModal<UniversityFieldCategory> implements IEditModal<UniversityFieldCategory>  {
  
  constructor(private universityFieldCategoryService: UniversityFieldCategoryService) {
    super(universityFieldCategoryService); 
    this.currentInstance = new UniversityFieldCategory();
  }

  

  @ViewChild('universityFieldCategoryEditUI')
  private universityFieldCategoryEditUI: NgForm;

  Init(universityFieldCategory: UniversityFieldCategory = new UniversityFieldCategory()) {
    if (universityFieldCategory.isNew)
      this.universityFieldCategoryEditUI.reset();
    this.InitUniversityFieldCategory(universityFieldCategory);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitUniversityFieldCategory(universityFieldCategory: UniversityFieldCategory){
    this.currentInstance = this.service.CreateInstance();
    if (!universityFieldCategory.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = universityFieldCategory;
  }

  ResetForm() {
    
  }
}