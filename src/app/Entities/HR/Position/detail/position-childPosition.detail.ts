import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Position } from '../position';
import { PositionService } from '../position.service';

import { PositionMasterUI } from '../master/position.master';
import { PositionEditUI } from '../edit/position.edit';
import { PositionDeleteUI } from '../delete/position.delete';



@Component({
  selector: 'position-childPosition-detail',
  templateUrl: './position-childPosition.detail.html',
  styleUrls: ['./position-childPosition.detail.css'],
  providers: [PositionService]
}) 

@Injectable()
export class Position_ChildPosition_DetailUI extends DetailView<Position> {

  constructor(private positionService: PositionService) {
    super(positionService);
  }

  public PositionList : Position[] = [];
  
  public currentPosition : Position = new Position();

  private parent: Position = new Position();

  @Input()
  public set Parent(value: Position) {
    this.parent = value;
    this.onReload();
  }

  public get Parent(): Position { return this.parent }

  public onReload(){
    if (Position.NotConfirm(this.parent))
      return;
    this.positionService
      .ServiceCollection
      .CollectionOfChildPosition(this.parent)
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
    editUI.Parent = this.parent;
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