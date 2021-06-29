import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Assessment } from '../assessment';
import { AssessmentService } from '../assessment.service';

import { AssessmentScore } from '../../AssessmentScore/assessmentScore';
import { AssessmentScoreMasterUI } from '../../AssessmentScore/master/assessmentScore.master';
import { AssessmentScoreEditUI } from '../../AssessmentScore/edit/assessmentScore.edit';
import { AssessmentScoreDeleteUI } from '../../AssessmentScore/delete/assessmentScore.delete';



@Component({
  selector: 'assessment-assessmentScore-detail',
  templateUrl: './assessment-assessmentScore.detail.html',
  styleUrls: ['./assessment-assessmentScore.detail.css'],
  providers: [AssessmentService]
}) 

@Injectable()
export class Assessment_AssessmentScore_DetailUI extends DetailView<Assessment> {

  constructor(private assessmentService: AssessmentService) {
    super(assessmentService);
  }

  public AssessmentScoreList : AssessmentScore[] = [];
  
  public currentAssessmentScore : AssessmentScore = new AssessmentScore();

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
      .CollectionOfAssessmentScore(this.assessment)
      .then(assessmentScoreList => {
        this.AssessmentScoreList = assessmentScoreList;
        this.currentAssessmentScore = new AssessmentScore();
      });
  }

  public onSelect(i: number) {
    this.currentAssessmentScore = this.AssessmentScoreList[i];
    if (AssessmentScore.NotConfirm(this.currentAssessmentScore))
      this.currentAssessmentScore = new AssessmentScore();
  }

  public onDblClicked(masterUI: AssessmentScoreMasterUI) {
    if (AssessmentScore.NotConfirm(this.currentAssessmentScore))
      return;
    masterUI.ShowDialog(this.currentAssessmentScore);
  }

  public onAdd(editUI: AssessmentScoreEditUI) {
    editUI.Assessment = this.assessment;
    editUI.ShowDialog(new AssessmentScore());
  }

  public onEdit(editUI: AssessmentScoreEditUI) {
    if (AssessmentScore.NotConfirm(this.currentAssessmentScore))
      return;
    editUI.ShowDialog(this.currentAssessmentScore);
  }

  public onDelete(deleteUI: AssessmentScoreDeleteUI) {
    if (AssessmentScore.NotConfirm(this.currentAssessmentScore))
      return;
    deleteUI.ShowDialog(this.currentAssessmentScore);
  }

  public onEditModal_Closed(assessmentScore: AssessmentScore) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}