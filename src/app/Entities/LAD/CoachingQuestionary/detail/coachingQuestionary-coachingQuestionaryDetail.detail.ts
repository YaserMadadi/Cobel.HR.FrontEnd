import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { CoachingQuestionary } from '../coachingQuestionary';
import { CoachingQuestionaryService } from '../coachingQuestionary.service';

import { CoachingQuestionaryDetail } from '../../CoachingQuestionaryDetail/coachingQuestionaryDetail';
import { CoachingQuestionaryDetailMasterUI } from '../../CoachingQuestionaryDetail/master/coachingQuestionaryDetail.master';
import { CoachingQuestionaryDetailEditUI } from '../../CoachingQuestionaryDetail/edit/coachingQuestionaryDetail.edit';
import { CoachingQuestionaryDetailDeleteUI } from '../../CoachingQuestionaryDetail/delete/coachingQuestionaryDetail.delete';



@Component({
  selector: 'coachingQuestionary-coachingQuestionaryDetail-detail',
  templateUrl: './coachingQuestionary-coachingQuestionaryDetail.detail.html',
  styleUrls: ['./coachingQuestionary-coachingQuestionaryDetail.detail.css']
})
export class CoachingQuestionary_CoachingQuestionaryDetail_DetailUI extends DetailView<CoachingQuestionary> {

  constructor(private coachingQuestionaryService: CoachingQuestionaryService) {
    super(coachingQuestionaryService);
  }

  public CoachingQuestionaryDetailList : CoachingQuestionaryDetail[] = [];
  
  public currentCoachingQuestionaryDetail : CoachingQuestionaryDetail = new CoachingQuestionaryDetail();

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
      .CollectionOfCoachingQuestionaryDetail(this.coachingQuestionary)
      .then(coachingQuestionaryDetailList => {
        this.CoachingQuestionaryDetailList = coachingQuestionaryDetailList;
        this.currentCoachingQuestionaryDetail = new CoachingQuestionaryDetail();
      });
  }

  public onSelect(i: number) {
    this.currentCoachingQuestionaryDetail = this.CoachingQuestionaryDetailList[i];
    if (CoachingQuestionaryDetail.NotConfirm(this.currentCoachingQuestionaryDetail))
      this.currentCoachingQuestionaryDetail = new CoachingQuestionaryDetail();
  }

  public onDblClicked(masterUI: CoachingQuestionaryDetailMasterUI) {
    if (CoachingQuestionaryDetail.NotConfirm(this.currentCoachingQuestionaryDetail))
      return;
    masterUI.ShowDialog(this.currentCoachingQuestionaryDetail);
  }

  public onAdd(editUI: CoachingQuestionaryDetailEditUI) {
    editUI.CoachingQuestionary = this.coachingQuestionary;
    editUI.ShowDialog(new CoachingQuestionaryDetail());
  }

  public onEdit(editUI: CoachingQuestionaryDetailEditUI) {
    if (CoachingQuestionaryDetail.NotConfirm(this.currentCoachingQuestionaryDetail))
      return;
    editUI.ShowDialog(this.currentCoachingQuestionaryDetail);
  }

  public onDelete(deleteUI: CoachingQuestionaryDetailDeleteUI) {
    if (CoachingQuestionaryDetail.NotConfirm(this.currentCoachingQuestionaryDetail))
      return;
    deleteUI.ShowDialog(this.currentCoachingQuestionaryDetail);
  }

  public onEditModal_Closed(coachingQuestionaryDetail: CoachingQuestionaryDetail) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}