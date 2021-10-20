import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Assessor } from '../assessor';
import { AssessorService } from '../assessor.service';

import { Assessment } from '../../Assessment/assessment';
import { AssessmentMasterUI } from '../../Assessment/master/assessment.master';
import { AssessmentEditUI } from '../../Assessment/edit/assessment.edit';
import { AssessmentDeleteUI } from '../../Assessment/delete/assessment.delete';



@Component({
  selector: 'assessor-assessment-detail',
  templateUrl: './assessor-assessment.detail.html',
  styleUrls: ['./assessor-assessment.detail.css']
})
export class Assessor_Assessment_DetailUI extends DetailView<Assessor> {

  constructor(private assessorService: AssessorService) {
    super(assessorService);
  }

  public AssessmentList : Assessment[] = [];
  
  public currentAssessment : Assessment = new Assessment();

  private assessor: Assessor = new Assessor();

  @Input()
  public set Assessor(value: Assessor) {
    this.assessor = value;
    this.onReload();
  }

  public get Assessor(): Assessor { return this.assessor }

  public onReload(){
    if (Assessor.NotConfirm(this.assessor))
      return;
    this.assessorService
      .ServiceCollection
      .CollectionOfAssessment(this.assessor)
      .then(assessmentList => {
        this.AssessmentList = assessmentList;
        this.currentAssessment = new Assessment();
      });
  }

  public onSelect(i: number) {
    this.currentAssessment = this.AssessmentList[i];
    if (Assessment.NotConfirm(this.currentAssessment))
      this.currentAssessment = new Assessment();
  }

  public onDblClicked(masterUI: AssessmentMasterUI) {
    if (Assessment.NotConfirm(this.currentAssessment))
      return;
    masterUI.ShowDialog(this.currentAssessment);
  }

  public onAdd(editUI: AssessmentEditUI) {
    editUI.Assessor = this.assessor;
    editUI.ShowDialog(new Assessment());
  }

  public onEdit(editUI: AssessmentEditUI) {
    if (Assessment.NotConfirm(this.currentAssessment))
      return;
    editUI.ShowDialog(this.currentAssessment);
  }

  public onDelete(deleteUI: AssessmentDeleteUI) {
    if (Assessment.NotConfirm(this.currentAssessment))
      return;
    deleteUI.ShowDialog(this.currentAssessment);
  }

  public onEditModal_Closed(assessment: Assessment) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}