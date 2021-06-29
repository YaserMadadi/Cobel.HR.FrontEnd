import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Assessment } from '../assessment';
import { AssessmentService } from '../assessment.service';

import { AssessmentTraining } from '../../AssessmentTraining/assessmentTraining';
import { AssessmentTrainingMasterUI } from '../../AssessmentTraining/master/assessmentTraining.master';
import { AssessmentTrainingEditUI } from '../../AssessmentTraining/edit/assessmentTraining.edit';
import { AssessmentTrainingDeleteUI } from '../../AssessmentTraining/delete/assessmentTraining.delete';



@Component({
  selector: 'assessment-assessmentTraining-detail',
  templateUrl: './assessment-assessmentTraining.detail.html',
  styleUrls: ['./assessment-assessmentTraining.detail.css'],
  providers: [AssessmentService]
}) 

@Injectable()
export class Assessment_AssessmentTraining_DetailUI extends DetailView<Assessment> {

  constructor(private assessmentService: AssessmentService) {
    super(assessmentService);
  }

  public AssessmentTrainingList : AssessmentTraining[] = [];
  
  public currentAssessmentTraining : AssessmentTraining = new AssessmentTraining();

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
      .CollectionOfAssessmentTraining(this.assessment)
      .then(assessmentTrainingList => {
        this.AssessmentTrainingList = assessmentTrainingList;
        this.currentAssessmentTraining = new AssessmentTraining();
      });
  }

  public onSelect(i: number) {
    this.currentAssessmentTraining = this.AssessmentTrainingList[i];
    if (AssessmentTraining.NotConfirm(this.currentAssessmentTraining))
      this.currentAssessmentTraining = new AssessmentTraining();
  }

  public onDblClicked(masterUI: AssessmentTrainingMasterUI) {
    if (AssessmentTraining.NotConfirm(this.currentAssessmentTraining))
      return;
    masterUI.ShowDialog(this.currentAssessmentTraining);
  }

  public onAdd(editUI: AssessmentTrainingEditUI) {
    editUI.Assessment = this.assessment;
    editUI.ShowDialog(new AssessmentTraining());
  }

  public onEdit(editUI: AssessmentTrainingEditUI) {
    if (AssessmentTraining.NotConfirm(this.currentAssessmentTraining))
      return;
    editUI.ShowDialog(this.currentAssessmentTraining);
  }

  public onDelete(deleteUI: AssessmentTrainingDeleteUI) {
    if (AssessmentTraining.NotConfirm(this.currentAssessmentTraining))
      return;
    deleteUI.ShowDialog(this.currentAssessmentTraining);
  }

  public onEditModal_Closed(assessmentTraining: AssessmentTraining) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}