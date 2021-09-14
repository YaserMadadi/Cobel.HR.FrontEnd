import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { CoachingQuestionary } from '../coachingQuestionary';
import { CoachingQuestionaryService } from '../coachingQuestionary.service';
import { QuestionaryType } from '../../QuestionaryType/questionaryType';
import { QuestionaryTypeEditUI } from '../../QuestionaryType/edit/questionaryType.edit';
import { Assessment } from '../../Assessment/assessment';
import { AssessmentEditUI } from '../../Assessment/edit/assessment.edit';
import { Person } from '../../../HR/Person/person';
import { PersonEditUI } from '../../../HR/Person/edit/person.edit';



@Component({
  selector: 'lad-coachingQuestionary-edit',
  templateUrl: './coachingQuestionary.edit.html',
  styleUrls: ['./coachingQuestionary.edit.css']
})
export class CoachingQuestionaryEditUI extends EditModal<CoachingQuestionary> implements IEditModal<CoachingQuestionary>  {
  
  constructor(private coachingQuestionaryService: CoachingQuestionaryService) {
    super(coachingQuestionaryService); 
    this.currentInstance = new CoachingQuestionary();
  }

  //#region Foreign Entities
	
	//#region -- QuestionaryType --

  questionaryTypeComponent : ForeignComponent<QuestionaryType> = new ForeignComponent<QuestionaryType>(this.coachingQuestionaryService.QuestionaryTypeService);

  @Input()
  public set QuestionaryType(value: QuestionaryType) {
    this.currentInstance.questionaryType = this.questionaryTypeComponent.instance = value;
  }  


  //#endregion -- QuestionaryType --
	//#region -- Assessment --

  assessmentComponent : ForeignComponent<Assessment> = new ForeignComponent<Assessment>(this.coachingQuestionaryService.AssessmentService);

  @Input()
  public set Assessment(value: Assessment) {
    this.currentInstance.assessment = this.assessmentComponent.instance = value;
  }  


  //#endregion -- Assessment --
	//#region -- ResponsiblePerson --

  responsiblePersonComponent : ForeignComponent<Person> = new ForeignComponent<Person>(this.coachingQuestionaryService.PersonService);

  @Input()
  public set ResponsiblePerson(value: Person) {
    this.currentInstance.responsiblePerson = this.responsiblePersonComponent.instance = value;
  }  


  //#endregion -- ResponsiblePerson --
	//#endregion

  @ViewChild('coachingQuestionaryEditUI')
  private coachingQuestionaryEditUI: NgForm;

  Init(coachingQuestionary: CoachingQuestionary = new CoachingQuestionary()) {
    if (coachingQuestionary.isNew)
      this.coachingQuestionaryEditUI.reset();
    this.InitCoachingQuestionary(coachingQuestionary);
    this.loadLists();
  }

  private loadLists() {
    
    this.questionaryTypeComponent.LoadList();
  }
  
  InitCoachingQuestionary(coachingQuestionary: CoachingQuestionary){
    this.currentInstance = this.service.CreateInstance();
    if (!coachingQuestionary.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.questionaryTypeComponent.instance = coachingQuestionary.questionaryType;
			this.assessmentComponent.instance = coachingQuestionary.assessment;
			this.responsiblePersonComponent.instance = coachingQuestionary.responsiblePerson;
    } else {
      coachingQuestionary.questionaryType = this.questionaryTypeComponent.instance;
			coachingQuestionary.assessment = this.assessmentComponent.instance;
			coachingQuestionary.responsiblePerson = this.responsiblePersonComponent.instance;
    }
    this.currentInstance = coachingQuestionary;
  }

  ResetForm() {
    this.QuestionaryType = new QuestionaryType();
		this.Assessment = new Assessment();
		this.ResponsiblePerson = new Person();
  }
}