import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Assessment } from '../assessment';
import { AssessmentService } from '../assessment.service';

import { CoachingQuestionary } from '../../CoachingQuestionary/coachingQuestionary';
import { CoachingQuestionaryMasterUI } from '../../CoachingQuestionary/master/coachingQuestionary.master';
import { CoachingQuestionaryEditUI } from '../../CoachingQuestionary/edit/coachingQuestionary.edit';
import { CoachingQuestionaryDeleteUI } from '../../CoachingQuestionary/delete/coachingQuestionary.delete';



@Component({
  selector: 'assessment-coachingQuestionary-detail',
  templateUrl: './assessment-coachingQuestionary.detail.html',
  styleUrls: ['./assessment-coachingQuestionary.detail.css']
})
export class Assessment_CoachingQuestionary_DetailUI extends DetailView<Assessment> {

  constructor(private assessmentService: AssessmentService) {
    super(assessmentService);
  }

  public CoachingQuestionaryList : CoachingQuestionary[] = [];
  
  public currentCoachingQuestionary : CoachingQuestionary = new CoachingQuestionary();

  private assessment: Assessment = new Assessment();

  @Input()
  public set Assessment(value: Assessment) {
    this.assessment = value;
    this.onReload();
  }

  public get Assessment(): Assessment { return this.assessment }

  public onReload(){
    if (Assessment.NotConfirm(this.assessment))
      return;
    this.assessmentService
      .ServiceCollection
      .CollectionOfCoachingQuestionary(this.assessment)
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
    editUI.Assessment = this.assessment;
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