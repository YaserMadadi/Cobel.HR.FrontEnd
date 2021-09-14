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
  selector: 'currentPosition-rotationAssessment-detail',
  templateUrl: './currentPosition-rotationAssessment.detail.html',
  styleUrls: ['./currentPosition-rotationAssessment.detail.css']
})
export class CurrentPosition_RotationAssessment_DetailUI extends DetailView<Position> {

  constructor(private positionService: PositionService) {
    super(positionService);
  }

  public RotationAssessmentList : RotationAssessment[] = [];
  
  public currentRotationAssessment : RotationAssessment = new RotationAssessment();

  private currentPosition: Position = new Position();

  @Input()
  public set CurrentPosition(value: Position) {
    this.currentPosition = value;
    this.onReload();
  }

  public get CurrentPosition(): Position { return this.currentPosition }

  public onReload(){
    if (Position.NotConfirm(this.currentPosition))
      return;
    this.positionService
      .ServiceCollection
      .CollectionOfRotationAssessment_CurrentPosition(this.currentPosition)
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
    editUI.CurrentPosition = this.currentPosition;
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