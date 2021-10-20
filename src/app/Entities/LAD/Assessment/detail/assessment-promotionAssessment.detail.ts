import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Assessment } from '../assessment';
import { AssessmentService } from '../assessment.service';

import { PromotionAssessment } from '../../PromotionAssessment/promotionAssessment';
import { PromotionAssessmentMasterUI } from '../../PromotionAssessment/master/promotionAssessment.master';
import { PromotionAssessmentEditUI } from '../../PromotionAssessment/edit/promotionAssessment.edit';
import { PromotionAssessmentDeleteUI } from '../../PromotionAssessment/delete/promotionAssessment.delete';



@Component({
  selector: 'assessment-promotionAssessment-detail',
  templateUrl: './assessment-promotionAssessment.detail.html',
  styleUrls: ['./assessment-promotionAssessment.detail.css']
})
export class Assessment_PromotionAssessment_DetailUI extends DetailView<Assessment> {

  constructor(private assessmentService: AssessmentService) {
    super(assessmentService);
  }

  public PromotionAssessmentList : PromotionAssessment[] = [];
  
  public currentPromotionAssessment : PromotionAssessment = new PromotionAssessment();

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
      .CollectionOfPromotionAssessment(this.assessment)
      .then(promotionAssessmentList => {
        this.PromotionAssessmentList = promotionAssessmentList;
        this.currentPromotionAssessment = new PromotionAssessment();
      });
  }

  public onSelect(i: number) {
    this.currentPromotionAssessment = this.PromotionAssessmentList[i];
    if (PromotionAssessment.NotConfirm(this.currentPromotionAssessment))
      this.currentPromotionAssessment = new PromotionAssessment();
  }

  public onDblClicked(masterUI: PromotionAssessmentMasterUI) {
    if (PromotionAssessment.NotConfirm(this.currentPromotionAssessment))
      return;
    masterUI.ShowDialog(this.currentPromotionAssessment);
  }

  public onAdd(editUI: PromotionAssessmentEditUI) {
    editUI.Assessment = this.assessment;
    editUI.ShowDialog(new PromotionAssessment());
  }

  public onEdit(editUI: PromotionAssessmentEditUI) {
    if (PromotionAssessment.NotConfirm(this.currentPromotionAssessment))
      return;
    editUI.ShowDialog(this.currentPromotionAssessment);
  }

  public onDelete(deleteUI: PromotionAssessmentDeleteUI) {
    if (PromotionAssessment.NotConfirm(this.currentPromotionAssessment))
      return;
    deleteUI.ShowDialog(this.currentPromotionAssessment);
  }

  public onEditModal_Closed(promotionAssessment: PromotionAssessment) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}