import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { CoachingQuestionaryAnswered } from '../coachingQuestionaryAnswered';
import { CoachingQuestionaryAnsweredService } from '../coachingQuestionaryAnswered.service';
import { CoachingQuestionary } from '../../CoachingQuestionary/coachingQuestionary';
import { CoachingQuestionaryEditUI } from '../../CoachingQuestionary/edit/coachingQuestionary.edit';
import { QuestionaryItem } from '../../QuestionaryItem/questionaryItem';
import { QuestionaryItemEditUI } from '../../QuestionaryItem/edit/questionaryItem.edit';



@Component({
  selector: 'lad-coachingQuestionaryAnswered-edit',
  templateUrl: './coachingQuestionaryAnswered.edit.html',
  styleUrls: ['./coachingQuestionaryAnswered.edit.css']
})
export class CoachingQuestionaryAnsweredEditUI extends EditModal<CoachingQuestionaryAnswered> implements IEditModal<CoachingQuestionaryAnswered>  {
  
  constructor(private coachingQuestionaryAnsweredService: CoachingQuestionaryAnsweredService) {
    super(coachingQuestionaryAnsweredService); 
    this.currentInstance = new CoachingQuestionaryAnswered();
  }

  //#region Foreign Entities
	
	//#region -- CoachingQuestionary --

  coachingQuestionaryComponent : ForeignComponent<CoachingQuestionary> = new ForeignComponent<CoachingQuestionary>(this.coachingQuestionaryAnsweredService.CoachingQuestionaryService);

  @Input()
  public set CoachingQuestionary(value: CoachingQuestionary) {
    this.currentInstance.coachingQuestionary = this.coachingQuestionaryComponent.instance = value;
  }  


  //#endregion -- CoachingQuestionary --
	//#region -- QuestionaryItem --

  questionaryItemComponent : ForeignComponent<QuestionaryItem> = new ForeignComponent<QuestionaryItem>(this.coachingQuestionaryAnsweredService.QuestionaryItemService);

  @Input()
  public set QuestionaryItem(value: QuestionaryItem) {
    this.currentInstance.questionaryItem = this.questionaryItemComponent.instance = value;
  }  


  //#endregion -- QuestionaryItem --
	//#endregion

  @ViewChild('coachingQuestionaryAnsweredEditUI')
  private coachingQuestionaryAnsweredEditUI: NgForm;

  Init(coachingQuestionaryAnswered: CoachingQuestionaryAnswered = new CoachingQuestionaryAnswered()) {
    if (coachingQuestionaryAnswered.isNew)
      this.coachingQuestionaryAnsweredEditUI.reset();
    this.InitCoachingQuestionaryAnswered(coachingQuestionaryAnswered);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitCoachingQuestionaryAnswered(coachingQuestionaryAnswered: CoachingQuestionaryAnswered) {
    if (!coachingQuestionaryAnswered.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.coachingQuestionaryComponent.instance = coachingQuestionaryAnswered.coachingQuestionary;
			this.questionaryItemComponent.instance = coachingQuestionaryAnswered.questionaryItem;
    } else {
      coachingQuestionaryAnswered.coachingQuestionary = this.coachingQuestionaryComponent.instance;
			coachingQuestionaryAnswered.questionaryItem = this.questionaryItemComponent.instance;
    }
    this.currentInstance = coachingQuestionaryAnswered;
  }

  ResetForm() {
    this.CoachingQuestionary = new CoachingQuestionary();
		this.QuestionaryItem = new QuestionaryItem();
  }
}