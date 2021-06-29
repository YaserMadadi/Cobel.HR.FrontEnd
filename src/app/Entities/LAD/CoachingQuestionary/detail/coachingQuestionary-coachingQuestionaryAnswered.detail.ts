import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { CoachingQuestionary } from '../coachingQuestionary';
import { CoachingQuestionaryService } from '../coachingQuestionary.service';

import { CoachingQuestionaryAnswered } from '../../CoachingQuestionaryAnswered/coachingQuestionaryAnswered';
import { CoachingQuestionaryAnsweredMasterUI } from '../../CoachingQuestionaryAnswered/master/coachingQuestionaryAnswered.master';
import { CoachingQuestionaryAnsweredEditUI } from '../../CoachingQuestionaryAnswered/edit/coachingQuestionaryAnswered.edit';
import { CoachingQuestionaryAnsweredDeleteUI } from '../../CoachingQuestionaryAnswered/delete/coachingQuestionaryAnswered.delete';



@Component({
  selector: 'coachingQuestionary-coachingQuestionaryAnswered-detail',
  templateUrl: './coachingQuestionary-coachingQuestionaryAnswered.detail.html',
  styleUrls: ['./coachingQuestionary-coachingQuestionaryAnswered.detail.css'],
  providers: [CoachingQuestionaryService]
}) 

@Injectable()
export class CoachingQuestionary_CoachingQuestionaryAnswered_DetailUI extends DetailView<CoachingQuestionary> {

  constructor(private coachingQuestionaryService: CoachingQuestionaryService) {
    super(coachingQuestionaryService);
  }

  public CoachingQuestionaryAnsweredList : CoachingQuestionaryAnswered[] = [];
  
  public currentCoachingQuestionaryAnswered : CoachingQuestionaryAnswered = new CoachingQuestionaryAnswered();

  private coachingQuestionary: CoachingQuestionary = new CoachingQuestionary();

  @Input()
  public set CoachingQuestionary(value: CoachingQuestionary) {
    this.coachingQuestionary = value;
    this.onReload();
  }

  public get CoachingQuestionary(): CoachingQuestionary { return this.coachingQuestionary }

  public onReload(){
    if (CoachingQuestionary.NotConfirm(this.coachingQuestionary))
      return;
    this.coachingQuestionaryService
      .ServiceCollection
      .CollectionOfCoachingQuestionaryAnswered(this.coachingQuestionary)
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
    editUI.CoachingQuestionary = this.coachingQuestionary;
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