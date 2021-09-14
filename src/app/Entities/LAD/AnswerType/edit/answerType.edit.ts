import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { AnswerType } from '../answerType';
import { AnswerTypeService } from '../answerType.service';



@Component({
  selector: 'lad-answerType-edit',
  templateUrl: './answerType.edit.html',
  styleUrls: ['./answerType.edit.css']
})
export class AnswerTypeEditUI extends EditModal<AnswerType> implements IEditModal<AnswerType>  {
  
  constructor(private answerTypeService: AnswerTypeService) {
    super(answerTypeService); 
    this.currentInstance = new AnswerType();
  }

  

  @ViewChild('answerTypeEditUI')
  private answerTypeEditUI: NgForm;

  Init(answerType: AnswerType = new AnswerType()) {
    if (answerType.isNew)
      this.answerTypeEditUI.reset();
    this.InitAnswerType(answerType);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitAnswerType(answerType: AnswerType){
    this.currentInstance = this.service.CreateInstance();
    if (!answerType.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = answerType;
  }

  ResetForm() {
    
  }
}