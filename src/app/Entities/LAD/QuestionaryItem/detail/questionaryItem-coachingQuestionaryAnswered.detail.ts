import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { QuestionaryItem } from '../questionaryItem';
import { QuestionaryItemService } from '../questionaryItem.service';

import { CoachingQuestionaryAnswered } from '../../CoachingQuestionaryAnswered/coachingQuestionaryAnswered';
import { CoachingQuestionaryAnsweredMasterUI } from '../../CoachingQuestionaryAnswered/master/coachingQuestionaryAnswered.master';
import { CoachingQuestionaryAnsweredEditUI } from '../../CoachingQuestionaryAnswered/edit/coachingQuestionaryAnswered.edit';
import { CoachingQuestionaryAnsweredDeleteUI } from '../../CoachingQuestionaryAnswered/delete/coachingQuestionaryAnswered.delete';



@Component({
  selector: 'questionaryItem-coachingQuestionaryAnswered-detail',
  templateUrl: './questionaryItem-coachingQuestionaryAnswered.detail.html',
  styleUrls: ['./questionaryItem-coachingQuestionaryAnswered.detail.css']
})
export class QuestionaryItem_CoachingQuestionaryAnswered_DetailUI extends DetailView<QuestionaryItem> {

  constructor(private questionaryItemService: QuestionaryItemService) {
    super(questionaryItemService);
  }

  public CoachingQuestionaryAnsweredList : CoachingQuestionaryAnswered[] = [];
  
  public currentCoachingQuestionaryAnswered : CoachingQuestionaryAnswered = new CoachingQuestionaryAnswered();

  private questionaryItem: QuestionaryItem = new QuestionaryItem();

  @Input()
  public set QuestionaryItem(value: QuestionaryItem) {
    this.questionaryItem = value;
    this.onReload();
  }

  public get QuestionaryItem(): QuestionaryItem { return this.questionaryItem }

  public onReload(){
    if (QuestionaryItem.NotConfirm(this.questionaryItem))
      return;
    this.questionaryItemService
      .ServiceCollection
      .CollectionOfCoachingQuestionaryAnswered(this.questionaryItem)
      .then(coachingQuestionaryAnsweredList => {
        this.CoachingQuestionaryAnsweredList = coachingQuestionaryAnsweredList;
        this.currentCoachingQuestionaryAnswered = new CoachingQuestionaryAnswered();
      });
  }

  public onSelect(i: number) {
    this.currentCoachingQuestionaryAnswered = this.CoachingQuestionaryAnsweredList[i];
    if (CoachingQuestionaryAnswered.NotConfirm(this.currentCoachingQuestionaryAnswered))
      this.currentCoachingQuestionaryAnswered = new CoachingQuestionaryAnswered();
  }

  public onDblClicked(masterUI: CoachingQuestionaryAnsweredMasterUI) {
    if (CoachingQuestionaryAnswered.NotConfirm(this.currentCoachingQuestionaryAnswered))
      return;
    masterUI.ShowDialog(this.currentCoachingQuestionaryAnswered);
  }

  public onAdd(editUI: CoachingQuestionaryAnsweredEditUI) {
    editUI.QuestionaryItem = this.questionaryItem;
    editUI.ShowDialog(new CoachingQuestionaryAnswered());
  }

  public onEdit(editUI: CoachingQuestionaryAnsweredEditUI) {
    if (CoachingQuestionaryAnswered.NotConfirm(this.currentCoachingQuestionaryAnswered))
      return;
    editUI.ShowDialog(this.currentCoachingQuestionaryAnswered);
  }

  public onDelete(deleteUI: CoachingQuestionaryAnsweredDeleteUI) {
    if (CoachingQuestionaryAnswered.NotConfirm(this.currentCoachingQuestionaryAnswered))
      return;
    deleteUI.ShowDialog(this.currentCoachingQuestionaryAnswered);
  }

  public onEditModal_Closed(coachingQuestionaryAnswered: CoachingQuestionaryAnswered) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}