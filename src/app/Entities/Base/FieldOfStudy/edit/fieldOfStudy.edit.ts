import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { FieldOfStudy } from '../fieldOfStudy';
import { FieldOfStudyService } from '../fieldOfStudy.service';
import { UniversityFieldCategory } from '../../UniversityFieldCategory/universityFieldCategory';
import { UniversityFieldCategoryEditUI } from '../../UniversityFieldCategory/edit/universityFieldCategory.edit';



@Component({
  selector: 'base-fieldOfStudy-edit',
  templateUrl: './fieldOfStudy.edit.html',
  styleUrls: ['./fieldOfStudy.edit.css']
})
export class FieldOfStudyEditUI extends EditModal<FieldOfStudy> implements IEditModal<FieldOfStudy>  {
  
  constructor(private fieldOfStudyService: FieldOfStudyService) {
    super(fieldOfStudyService); 
    this.currentInstance = new FieldOfStudy();
  }

  //#region Foreign Entities
	
	//#region -- UniversityFieldCategory --

  universityFieldCategoryComponent : ForeignComponent<UniversityFieldCategory> = new ForeignComponent<UniversityFieldCategory>(this.fieldOfStudyService.UniversityFieldCategoryService);

  @Input()
  public set UniversityFieldCategory(value: UniversityFieldCategory) {
    this.currentInstance.universityFieldCategory = this.universityFieldCategoryComponent.instance = value;
  }  


  //#endregion -- UniversityFieldCategory --
	//#endregion

  @ViewChild('fieldOfStudyEditUI')
  private fieldOfStudyEditUI: NgForm;

  Init(fieldOfStudy: FieldOfStudy = new FieldOfStudy()) {
    if (fieldOfStudy.isNew)
      this.fieldOfStudyEditUI.reset();
    this.InitFieldOfStudy(fieldOfStudy);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitFieldOfStudy(fieldOfStudy: FieldOfStudy) {
    if (!fieldOfStudy.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.universityFieldCategoryComponent.instance = fieldOfStudy.universityFieldCategory;
    } else {
      fieldOfStudy.universityFieldCategory = this.universityFieldCategoryComponent.instance;
    }
    this.currentInstance = fieldOfStudy;
  }

  ResetForm() {
    this.UniversityFieldCategory = new UniversityFieldCategory();
  }
}