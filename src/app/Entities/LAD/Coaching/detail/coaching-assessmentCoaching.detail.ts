import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Coaching } from '../coaching';
import { CoachingService } from '../coaching.service';

import { AssessmentCoaching } from '../../AssessmentCoaching/assessmentCoaching';
import { AssessmentCoachingMasterUI } from '../../AssessmentCoaching/master/assessmentCoaching.master';
import { AssessmentCoachingEditUI } from '../../AssessmentCoaching/edit/assessmentCoaching.edit';
import { AssessmentCoachingDeleteUI } from '../../AssessmentCoaching/delete/assessmentCoaching.delete';



@Component({
  selector: 'coaching-assessmentCoaching-detail',
  templateUrl: './coaching-assessmentCoaching.detail.html',
  styleUrls: ['./coaching-assessmentCoaching.detail.css']
})
export class Coaching_AssessmentCoaching_DetailUI extends DetailView<Coaching> {

  constructor(private coachingService: CoachingService) {
    super(coachingService);
  }

  public AssessmentCoachingList : AssessmentCoaching[] = [];
  
  public currentAssessmentCoaching : AssessmentCoaching = new AssessmentCoaching();

  private coaching: Coaching = new Coaching();

  @Input()
  public set Coaching(value: Coaching) {
    this.coaching = value;
    this.onReload();
  }

  public get Coaching(): Coaching { return this.coaching }

  public onReload(){
    if (Coaching.NotConfirm(this.coaching))
      return;
    this.coachingService
      .ServiceCollection
      .CollectionOfAssessmentCoaching(this.coaching)
      .then(assessmentCoachingList => {
        this.AssessmentCoachingList = assessmentCoachingList;
        this.currentAssessmentCoaching = new AssessmentCoaching();
      });
  }

  public onSelect(i: number) {
    this.currentAssessmentCoaching = this.AssessmentCoachingList[i];
    if (AssessmentCoaching.NotConfirm(this.currentAssessmentCoaching))
      this.currentAssessmentCoaching = new AssessmentCoaching();
  }

  public onDblClicked(masterUI: AssessmentCoachingMasterUI) {
    if (AssessmentCoaching.NotConfirm(this.currentAssessmentCoaching))
      return;
    masterUI.ShowDialog(this.currentAssessmentCoaching);
  }

  public onAdd(editUI: AssessmentCoachingEditUI) {
    editUI.Coaching = this.coaching;
    editUI.ShowDialog(new AssessmentCoaching());
  }

  public onEdit(editUI: AssessmentCoachingEditUI) {
    if (AssessmentCoaching.NotConfirm(this.currentAssessmentCoaching))
      return;
    editUI.ShowDialog(this.currentAssessmentCoaching);
  }

  public onDelete(deleteUI: AssessmentCoachingDeleteUI) {
    if (AssessmentCoaching.NotConfirm(this.currentAssessmentCoaching))
      return;
    deleteUI.ShowDialog(this.currentAssessmentCoaching);
  }

  public onEditModal_Closed(assessmentCoaching: AssessmentCoaching) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}