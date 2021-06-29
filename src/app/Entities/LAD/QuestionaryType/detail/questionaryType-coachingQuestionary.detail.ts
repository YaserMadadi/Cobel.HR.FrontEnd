import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { QuestionaryType } from '../questionaryType';
import { QuestionaryTypeService } from '../questionaryType.service';

import { CoachingQuestionary } from '../../CoachingQuestionary/coachingQuestionary';
import { CoachingQuestionaryMasterUI } from '../../CoachingQuestionary/master/coachingQuestionary.master';
import { CoachingQuestionaryEditUI } from '../../CoachingQuestionary/edit/coachingQuestionary.edit';
import { CoachingQuestionaryDeleteUI } from '../../CoachingQuestionary/delete/coachingQuestionary.delete';



@Component({
  selector: 'questionaryType-coachingQuestionary-detail',
  templateUrl: './questionaryType-coachingQuestionary.detail.html',
  styleUrls: ['./questionaryType-coachingQuestionary.detail.css'],
  providers: [QuestionaryTypeService]
}) 

@Injectable()
export class QuestionaryType_CoachingQuestionary_DetailUI extends DetailView<QuestionaryType> {

  constructor(private questionaryTypeService: QuestionaryTypeService) {
    super(questionaryTypeService);
  }

  public CoachingQuestionaryList : CoachingQuestionary[] = [];
  
  public currentCoachingQuestionary : CoachingQuestionary = new CoachingQuestionary();

  private questionaryType: QuestionaryType = new QuestionaryType();

  @Input()
  public set QuestionaryType(value: QuestionaryType) {
    this.questionaryType = value;
    this.onReload();
  }

  public get QuestionaryType(): QuestionaryType { return this.questionaryType }

  public onReload(){
    if (QuestionaryType.NotConfirm(this.questionaryType))
      return;
    this.questionaryTypeService
      .ServiceCollection
      .CollectionOfCoachingQuestionary(this.questionaryType)
      .then(coachingQuestionaryList => {
        this.CoachingQuestionaryList = coachingQuestionaryList;
        this.currentCoachingQuestionary = new CoachingQuestionary();
      });
  }

  public onSelect(i: number) {
    this.currentCoachingQuestionary = this.CoachingQuestionaryList[i];
    if (CoachingQuestionary.NotConfirm(this.currentCoachingQuestionary))
      this.currentCoachingQuestionary = new CoachingQuestionary();
  }

  public onDblClicked(masterUI: CoachingQuestionaryMasterUI) {
    if (CoachingQuestionary.NotConfirm(this.currentCoachingQuestionary))
      return;
    masterUI.ShowDialog(this.currentCoachingQuestionary);
  }

  public onAdd(editUI: CoachingQuestionaryEditUI) {
    editUI.QuestionaryType = this.questionaryType;
    editUI.ShowDialog(new CoachingQuestionary());
  }

  public onEdit(editUI: CoachingQuestionaryEditUI) {
    if (CoachingQuestionary.NotConfirm(this.currentCoachingQuestionary))
      return;
    editUI.ShowDialog(this.currentCoachingQuestionary);
  }

  public onDelete(deleteUI: CoachingQuestionaryDeleteUI) {
    if (CoachingQuestionary.NotConfirm(this.currentCoachingQuestionary))
      return;
    deleteUI.ShowDialog(this.currentCoachingQuestionary);
  }

  public onEditModal_Closed(coachingQuestionary: CoachingQuestionary) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}