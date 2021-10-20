import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Assessment } from '../assessment';
import { AssessmentService } from '../assessment.service';

import { DevelopmentGoal } from '../../DevelopmentGoal/developmentGoal';
import { DevelopmentGoalMasterUI } from '../../DevelopmentGoal/master/developmentGoal.master';
import { DevelopmentGoalEditUI } from '../../DevelopmentGoal/edit/developmentGoal.edit';
import { DevelopmentGoalDeleteUI } from '../../DevelopmentGoal/delete/developmentGoal.delete';



@Component({
  selector: 'assessment-developmentGoal-detail',
  templateUrl: './assessment-developmentGoal.detail.html',
  styleUrls: ['./assessment-developmentGoal.detail.css']
})
export class Assessment_DevelopmentGoal_DetailUI extends DetailView<Assessment> {

  constructor(private assessmentService: AssessmentService) {
    super(assessmentService);
  }

  public DevelopmentGoalList : DevelopmentGoal[] = [];
  
  public currentDevelopmentGoal : DevelopmentGoal = new DevelopmentGoal();

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
      .CollectionOfDevelopmentGoal(this.assessment)
      .then(developmentGoalList => {
        this.DevelopmentGoalList = developmentGoalList;
        this.currentDevelopmentGoal = new DevelopmentGoal();
      });
  }

  public onSelect(i: number) {
    this.currentDevelopmentGoal = this.DevelopmentGoalList[i];
    if (DevelopmentGoal.NotConfirm(this.currentDevelopmentGoal))
      this.currentDevelopmentGoal = new DevelopmentGoal();
  }

  public onDblClicked(masterUI: DevelopmentGoalMasterUI) {
    if (DevelopmentGoal.NotConfirm(this.currentDevelopmentGoal))
      return;
    masterUI.ShowDialog(this.currentDevelopmentGoal);
  }

  public onAdd(editUI: DevelopmentGoalEditUI) {
    editUI.Assessment = this.assessment;
    editUI.ShowDialog(new DevelopmentGoal());
  }

  public onEdit(editUI: DevelopmentGoalEditUI) {
    if (DevelopmentGoal.NotConfirm(this.currentDevelopmentGoal))
      return;
    editUI.ShowDialog(this.currentDevelopmentGoal);
  }

  public onDelete(deleteUI: DevelopmentGoalDeleteUI) {
    if (DevelopmentGoal.NotConfirm(this.currentDevelopmentGoal))
      return;
    deleteUI.ShowDialog(this.currentDevelopmentGoal);
  }

  public onEditModal_Closed(developmentGoal: DevelopmentGoal) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}