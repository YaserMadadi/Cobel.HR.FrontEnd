import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { PositionDivision } from '../positionDivision';
import { PositionDivisionService } from '../positionDivision.service';

import { Position } from '../../../HR/Position/position';
import { PositionMasterUI } from '../../../HR/Position/master/position.master';
import { PositionEditUI } from '../../../HR/Position/edit/position.edit';
import { PositionDeleteUI } from '../../../HR/Position/delete/position.delete';



@Component({
  selector: 'positionDivision-position-detail',
  templateUrl: './positionDivision-position.detail.html',
  styleUrls: ['./positionDivision-position.detail.css']
})
export class PositionDivision_Position_DetailUI extends DetailView<PositionDivision> {

  constructor(private positionDivisionService: PositionDivisionService) {
    super(positionDivisionService);
  }

  public PositionList : Position[] = [];
  
  public currentPosition : Position = new Position();

  private positionDivision: PositionDivision = new PositionDivision();

  @Input()
  public set PositionDivision(value: PositionDivision) {
    this.positionDivision = value;
    this.onReload();
  }

  public get PositionDivision(): PositionDivision { return this.positionDivision }

  public onReload(){
    if (PositionDivision.NotConfirm(this.positionDivision))
      return;
    this.positionDivisionService
      .ServiceCollection
      .CollectionOfPosition(this.positionDivision)
      .then(positionList => {
        this.PositionList = positionList;
        this.currentPosition = new Position();
      });
  }

  public onSelect(i: number) {
    this.currentPosition = this.PositionList[i];
    if (Position.NotConfirm(this.currentPosition))
      this.currentPosition = new Position();
  }

  public onDblClicked(masterUI: PositionMasterUI) {
    if (Position.NotConfirm(this.currentPosition))
      return;
    masterUI.ShowDialog(this.currentPosition);
  }

  public onAdd(editUI: PositionEditUI) {
    // editUI.PositionDivision = this.positionDivision;
    editUI.ShowDialog(new Position());
  }

  public onEdit(editUI: PositionEditUI) {
    if (Position.NotConfirm(this.currentPosition))
      return;
    editUI.ShowDialog(this.currentPosition);
  }

  public onDelete(deleteUI: PositionDeleteUI) {
    if (Position.NotConfirm(this.currentPosition))
      return;
    deleteUI.ShowDialog(this.currentPosition);
  }

  public onEditModal_Closed(position: Position) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
