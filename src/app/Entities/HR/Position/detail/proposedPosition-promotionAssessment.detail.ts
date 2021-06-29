import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Position } from '../position';
import { PositionService } from '../position.service';

import { PromotionAssessment } from '../../../LAD/PromotionAssessment/promotionAssessment';
import { PromotionAssessmentMasterUI } from '../../../LAD/PromotionAssessment/master/promotionAssessment.master';
import { PromotionAssessmentEditUI } from '../../../LAD/PromotionAssessment/edit/promotionAssessment.edit';
import { PromotionAssessmentDeleteUI } from '../../../LAD/PromotionAssessment/delete/promotionAssessment.delete';



@Component({
  selector: 'proposedPosition-promotionAssessment-detail',
  templateUrl: './proposedPosition-promotionAssessment.detail.html',
  styleUrls: ['./proposedPosition-promotionAssessment.detail.css'],
  providers: [PositionService]
}) 

@Injectable()
export class ProposedPosition_PromotionAssessment_DetailUI extends DetailView<Position> {

  constructor(private positionService: PositionService) {
    super(positionService);
  }

  public PromotionAssessmentList : PromotionAssessment[] = [];
  
  public currentPromotionAssessment : PromotionAssessment = new PromotionAssessment();

  private proposedPosition: Position = new Position();

  @Input()
  public set ProposedPosition(value: Position) {
    this.proposedPosition = value;
    this.onReload();
  }

  public get ProposedPosition(): Position { return this.proposedPosition }

  public onReload(){
    if (Position.NotConfirm(this.proposedPosition))
      return;
    this.positionService
      .ServiceCollection
      .CollectionOfPromotionAssessment_ProposedPosition(this.proposedPosition)
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
    editUI.ProposedPosition = this.proposedPosition;
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