import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Assessment } from '../assessment';
import { AssessmentService } from '../assessment.service';

import { AssessmentCoaching } from '../../AssessmentCoaching/assessmentCoaching';
import { AssessmentCoachingMasterUI } from '../../AssessmentCoaching/master/assessmentCoaching.master';
import { AssessmentCoachingEditUI } from '../../AssessmentCoaching/edit/assessmentCoaching.edit';
import { AssessmentCoachingDeleteUI } from '../../AssessmentCoaching/delete/assessmentCoaching.delete';



@Component({
  selector: 'assessment-assessmentCoaching-detail',
  templateUrl: './assessment-assessmentCoaching.detail.html',
  styleUrls: ['./assessment-assessmentCoaching.detail.css']
})
export class Assessment_AssessmentCoaching_DetailUI extends DetailView<Assessment> {

  constructor(private assessmentService: AssessmentService) {
    super(assessmentService);
  }

  public AssessmentCoachingList : AssessmentCoaching[] = [];
  
  public currentAssessmentCoaching : AssessmentCoaching = new AssessmentCoaching();

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
      .CollectionOfAssessmentCoaching(this.assessment)
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
    editUI.Assessment = this.assessment;
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