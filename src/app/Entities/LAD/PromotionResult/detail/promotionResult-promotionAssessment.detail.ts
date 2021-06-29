import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { PromotionResult } from '../promotionResult';
import { PromotionResultService } from '../promotionResult.service';

import { PromotionAssessment } from '../../PromotionAssessment/promotionAssessment';
import { PromotionAssessmentMasterUI } from '../../PromotionAssessment/master/promotionAssessment.master';
import { PromotionAssessmentEditUI } from '../../PromotionAssessment/edit/promotionAssessment.edit';
import { PromotionAssessmentDeleteUI } from '../../PromotionAssessment/delete/promotionAssessment.delete';



@Component({
  selector: 'promotionResult-promotionAssessment-detail',
  templateUrl: './promotionResult-promotionAssessment.detail.html',
  styleUrls: ['./promotionResult-promotionAssessment.detail.css'],
  providers: [PromotionResultService]
}) 

@Injectable()
export class PromotionResult_PromotionAssessment_DetailUI extends DetailView<PromotionResult> {

  constructor(private promotionResultService: PromotionResultService) {
    super(promotionResultService);
  }

  public PromotionAssessmentList : PromotionAssessment[] = [];
  
  public currentPromotionAssessment : PromotionAssessment = new PromotionAssessment();

  private promotionResult: PromotionResult = new PromotionResult();

  @Input()
  public set PromotionResult(value: PromotionResult) {
    this.promotionResult = value;
    this.onReload();
  }

  public get PromotionResult(): PromotionResult { return this.promotionResult }

  public onReload(){
    if (PromotionResult.NotConfirm(this.promotionResult))
      return;
    this.promotionResultService
      .ServiceCollection
      .CollectionOfPromotionAssessment(this.promotionResult)
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
    editUI.PromotionResult = this.promotionResult;
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