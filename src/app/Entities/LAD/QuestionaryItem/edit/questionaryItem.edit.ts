import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { QuestionaryItem } from '../questionaryItem';
import { QuestionaryItemService } from '../questionaryItem.service';
import { QuestionaryType } from '../../QuestionaryType/questionaryType';
import { QuestionaryTypeEditUI } from '../../QuestionaryType/edit/questionaryType.edit';
import { AnswerType } from '../../AnswerType/answerType';
import { AnswerTypeEditUI } from '../../AnswerType/edit/answerType.edit';



@Component({
  selector: 'lad-questionaryItem-edit',
  templateUrl: './questionaryItem.edit.html',
  styleUrls: ['./questionaryItem.edit.css']
})
export class QuestionaryItemEditUI extends EditModal<QuestionaryItem> implements IEditModal<QuestionaryItem>  {
  
  constructor(private questionaryItemService: QuestionaryItemService) {
    super(questionaryItemService); 
    this.currentInstance = new QuestionaryItem();
  }

  //#region Foreign Entities
	
	//#region -- QuestionaryType --

  questionaryTypeComponent : ForeignComponent<QuestionaryType> = new ForeignComponent<QuestionaryType>(this.questionaryItemService.QuestionaryTypeService);

  @Input()
  public set QuestionaryType(value: QuestionaryType) {
    this.currentInstance.questionaryType = this.questionaryTypeComponent.instance = value;
  }  


  //#endregion -- QuestionaryType --
	//#region -- AnswerType --

  answerTypeComponent : ForeignComponent<AnswerType> = new ForeignComponent<AnswerType>(this.questionaryItemService.AnswerTypeService);

  @Input()
  public set AnswerType(value: AnswerType) {
    this.currentInstance.answerType = this.answerTypeComponent.instance = value;
  }  


  //#endregion -- AnswerType --
	//#endregion

  @ViewChild('questionaryItemEditUI')
  private questionaryItemEditUI: NgForm;

  Init(questionaryItem: QuestionaryItem = new QuestionaryItem()) {
    if (questionaryItem.isNew)
      this.questionaryItemEditUI.reset();
    this.InitQuestionaryItem(questionaryItem);
    this.loadLists();
  }

  private loadLists() {
    
    this.questionaryTypeComponent.LoadList();
  }
  
  InitQuestionaryItem(questionaryItem: QuestionaryItem){
    this.currentInstance = this.service.CreateInstance();
    if (!questionaryItem.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.questionaryTypeComponent.instance = questionaryItem.questionaryType;
			this.answerTypeComponent.instance = questionaryItem.answerType;
    } else {
      questionaryItem.questionaryType = this.questionaryTypeComponent.instance;
			questionaryItem.answerType = this.answerTypeComponent.instance;
    }
    this.currentInstance = questionaryItem;
  }

  ResetForm() {
    this.QuestionaryType = new QuestionaryType();
		this.AnswerType = new AnswerType();
  }
}