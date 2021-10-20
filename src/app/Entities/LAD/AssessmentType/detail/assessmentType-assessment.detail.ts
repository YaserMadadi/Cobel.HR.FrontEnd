import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { AssessmentType } from '../assessmentType';
import { AssessmentTypeService } from '../assessmentType.service';

import { Assessment } from '../../Assessment/assessment';
import { AssessmentMasterUI } from '../../Assessment/master/assessment.master';
import { AssessmentEditUI } from '../../Assessment/edit/assessment.edit';
import { AssessmentDeleteUI } from '../../Assessment/delete/assessment.delete';



@Component({
  selector: 'assessmentType-assessment-detail',
  templateUrl: './assessmentType-assessment.detail.html',
  styleUrls: ['./assessmentType-assessment.detail.css']
})
export class AssessmentType_Assessment_DetailUI extends DetailView<AssessmentType> {

  constructor(private assessmentTypeService: AssessmentTypeService) {
    super(assessmentTypeService);
  }

  public AssessmentList : Assessment[] = [];
  
  public currentAssessment : Assessment = new Assessment();

  private assessmentType: AssessmentType = new AssessmentType();

  @Input()
  public set AssessmentType(value: AssessmentType) {
    this.assessmentType = value;
    this.onReload();
  }

  public get AssessmentType(): AssessmentType { return this.assessmentType }

  public onReload(){
    if (AssessmentType.NotConfirm(this.assessmentType))
      return;
    this.assessmentTypeService
      .ServiceCollection
      .CollectionOfAssessment(this.assessmentType)
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
    editUI.AssessmentType = this.assessmentType;
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