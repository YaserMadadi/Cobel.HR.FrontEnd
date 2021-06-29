import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { AssessmentType } from '../assessmentType';
import { AssessmentTypeService } from '../assessmentType.service';



@Component({
  selector: 'lad-assessmentType-edit',
  templateUrl: './assessmentType.edit.html',
  styleUrls: ['./assessmentType.edit.css']
})
export class AssessmentTypeEditUI extends EditModal<AssessmentType> implements IEditModal<AssessmentType>  {
  
  constructor(private assessmentTypeService: AssessmentTypeService) {
    super(assessmentTypeService); 
    this.currentInstance = new AssessmentType();
  }

  

  @ViewChild('assessmentTypeEditUI')
  private assessmentTypeEditUI: NgForm;

  Init(assessmentType: AssessmentType = new AssessmentType()) {
    if (assessmentType.isNew)
      this.assessmentTypeEditUI.reset();
    this.InitAssessmentType(assessmentType);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitAssessmentType(assessmentType: AssessmentType) {
    if (!assessmentType.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = assessmentType;
  }

  ResetForm() {
    
  }
}