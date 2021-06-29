import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { QuestionaryType } from '../questionaryType';
import { QuestionaryTypeService } from '../questionaryType.service';



@Component({
  selector: 'lad-questionaryType-edit',
  templateUrl: './questionaryType.edit.html',
  styleUrls: ['./questionaryType.edit.css']
})
export class QuestionaryTypeEditUI extends EditModal<QuestionaryType> implements IEditModal<QuestionaryType>  {
  
  constructor(private questionaryTypeService: QuestionaryTypeService) {
    super(questionaryTypeService); 
    this.currentInstance = new QuestionaryType();
  }

  

  @ViewChild('questionaryTypeEditUI')
  private questionaryTypeEditUI: NgForm;

  Init(questionaryType: QuestionaryType = new QuestionaryType()) {
    if (questionaryType.isNew)
      this.questionaryTypeEditUI.reset();
    this.InitQuestionaryType(questionaryType);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitQuestionaryType(questionaryType: QuestionaryType) {
    if (!questionaryType.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = questionaryType;
  }

  ResetForm() {
    
  }
}