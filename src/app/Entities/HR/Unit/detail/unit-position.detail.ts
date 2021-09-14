import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Unit } from '../unit';
import { UnitService } from '../unit.service';

import { Position } from '../../Position/position';
import { PositionMasterUI } from '../../Position/master/position.master';
import { PositionEditUI } from '../../Position/edit/position.edit';
import { PositionDeleteUI } from '../../Position/delete/position.delete';



@Component({
  selector: 'unit-position-detail',
  templateUrl: './unit-position.detail.html',
  styleUrls: ['./unit-position.detail.css']
})
export class Unit_Position_DetailUI extends DetailView<Unit> {

  constructor(private unitService: UnitService) {
    super(unitService);
  }

  public PositionList : Position[] = [];
  
  public currentPosition : Position = new Position();

  private unit: Unit = new Unit();

  @Input()
  public set Unit(value: Unit) {
    this.unit = value;
    this.onReload();
  }

  public get Unit(): Unit { return this.unit }

  public onReload(){
    if (Unit.NotConfirm(this.unit))
      return;
    this.unitService
      .ServiceCollection
      .CollectionOfPosition(this.unit)
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
    editUI.Unit = this.unit;
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