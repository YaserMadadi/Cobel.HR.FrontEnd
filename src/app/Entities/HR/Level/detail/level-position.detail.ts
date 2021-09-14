import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Level } from '../level';
import { LevelService } from '../level.service';

import { Position } from '../../Position/position';
import { PositionMasterUI } from '../../Position/master/position.master';
import { PositionEditUI } from '../../Position/edit/position.edit';
import { PositionDeleteUI } from '../../Position/delete/position.delete';



@Component({
  selector: 'level-position-detail',
  templateUrl: './level-position.detail.html',
  styleUrls: ['./level-position.detail.css']
})
export class Level_Position_DetailUI extends DetailView<Level> {

  constructor(private levelService: LevelService) {
    super(levelService);
  }

  public PositionList : Position[] = [];
  
  public currentPosition : Position = new Position();

  private level: Level = new Level();

  @Input()
  public set Level(value: Level) {
    this.level = value;
    this.onReload();
  }

  public get Level(): Level { return this.level }

  public onReload(){
    if (Level.NotConfirm(this.level))
      return;
    this.levelService
      .ServiceCollection
      .CollectionOfPosition(this.level)
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
    editUI.Level = this.level;
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