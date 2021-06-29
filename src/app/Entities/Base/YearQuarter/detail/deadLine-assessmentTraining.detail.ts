import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { YearQuarter } from '../yearQuarter';
import { YearQuarterService } from '../yearQuarter.service';

import { AssessmentTraining } from '../../../LAD/AssessmentTraining/assessmentTraining';
import { AssessmentTrainingMasterUI } from '../../../LAD/AssessmentTraining/master/assessmentTraining.master';
import { AssessmentTrainingEditUI } from '../../../LAD/AssessmentTraining/edit/assessmentTraining.edit';
import { AssessmentTrainingDeleteUI } from '../../../LAD/AssessmentTraining/delete/assessmentTraining.delete';



@Component({
  selector: 'deadLine-assessmentTraining-detail',
  templateUrl: './deadLine-assessmentTraining.detail.html',
  styleUrls: ['./deadLine-assessmentTraining.detail.css'],
  providers: [YearQuarterService]
}) 

@Injectable()
export class DeadLine_AssessmentTraining_DetailUI extends DetailView<YearQuarter> {

  constructor(private yearQuarterService: YearQuarterService) {
    super(yearQuarterService);
  }

  public AssessmentTrainingList : AssessmentTraining[] = [];
  
  public currentAssessmentTraining : AssessmentTraining = new AssessmentTraining();

  private deadLine: YearQuarter = new YearQuarter();

  @Input()
  public set DeadLine(value: YearQuarter) {
    this.deadLine = value;
    this.onReload();
  }

  public get DeadLine(): YearQuarter { return this.deadLine }

  public onReload(){
    if (YearQuarter.NotConfirm(this.deadLine))
      return;
    this.yearQuarterService
      .ServiceCollection
      .CollectionOfAssessmentTraining_DeadLine(this.deadLine)
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
    editUI.DeadLine = this.deadLine;
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