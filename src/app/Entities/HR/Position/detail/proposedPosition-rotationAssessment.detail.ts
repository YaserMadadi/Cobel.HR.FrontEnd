import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Position } from '../position';
import { PositionService } from '../position.service';

import { RotationAssessment } from '../../../LAD/RotationAssessment/rotationAssessment';
import { RotationAssessmentMasterUI } from '../../../LAD/RotationAssessment/master/rotationAssessment.master';
import { RotationAssessmentEditUI } from '../../../LAD/RotationAssessment/edit/rotationAssessment.edit';
import { RotationAssessmentDeleteUI } from '../../../LAD/RotationAssessment/delete/rotationAssessment.delete';



@Component({
  selector: 'proposedPosition-rotationAssessment-detail',
  templateUrl: './proposedPosition-rotationAssessment.detail.html',
  styleUrls: ['./proposedPosition-rotationAssessment.detail.css']
})
export class ProposedPosition_RotationAssessment_DetailUI extends DetailView<Position> {

  constructor(private positionService: PositionService) {
    super(positionService);
  }

  public RotationAssessmentList : RotationAssessment[] = [];
  
  public currentRotationAssessment : RotationAssessment = new RotationAssessment();

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
      .CollectionOfRotationAssessment_ProposedPosition(this.proposedPosition)
      .then(rotationAssessmentList => {
        this.RotationAssessmentList = rotationAssessmentList;
        this.currentRotationAssessment = new RotationAssessment();
      });
  }

  public onSelect(i: number) {
    this.currentRotationAssessment = this.RotationAssessmentList[i];
    if (RotationAssessment.NotConfirm(this.currentRotationAssessment))
      this.currentRotationAssessment = new RotationAssessment();
  }

  public onDblClicked(masterUI: RotationAssessmentMasterUI) {
    if (RotationAssessment.NotConfirm(this.currentRotationAssessment))
      return;
    masterUI.ShowDialog(this.currentRotationAssessment);
  }

  public onAdd(editUI: RotationAssessmentEditUI) {
    editUI.ProposedPosition = this.proposedPosition;
    editUI.ShowDialog(new RotationAssessment());
  }

  public onEdit(editUI: RotationAssessmentEditUI) {
    if (RotationAssessment.NotConfirm(this.currentRotationAssessment))
      return;
    editUI.ShowDialog(this.currentRotationAssessment);
  }

  public onDelete(deleteUI: RotationAssessmentDeleteUI) {
    if (RotationAssessment.NotConfirm(this.currentRotationAssessment))
      return;
    deleteUI.ShowDialog(this.currentRotationAssessment);
  }

  public onEditModal_Closed(rotationAssessment: RotationAssessment) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}