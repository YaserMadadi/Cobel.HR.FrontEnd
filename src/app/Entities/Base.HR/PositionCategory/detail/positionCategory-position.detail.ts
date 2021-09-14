import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { PositionCategory } from '../positionCategory';
import { PositionCategoryService } from '../positionCategory.service';

import { Position } from '../../../HR/Position/position';
import { PositionMasterUI } from '../../../HR/Position/master/position.master';
import { PositionEditUI } from '../../../HR/Position/edit/position.edit';
import { PositionDeleteUI } from '../../../HR/Position/delete/position.delete';



@Component({
  selector: 'positionCategory-position-detail',
  templateUrl: './positionCategory-position.detail.html',
  styleUrls: ['./positionCategory-position.detail.css']
})
export class PositionCategory_Position_DetailUI extends DetailView<PositionCategory> {

  constructor(private positionCategoryService: PositionCategoryService) {
    super(positionCategoryService);
  }

  public PositionList : Position[] = [];
  
  public currentPosition : Position = new Position();

  private positionCategory: PositionCategory = new PositionCategory();

  @Input()
  public set PositionCategory(value: PositionCategory) {
    this.positionCategory = value;
    this.onReload();
  }

  public get PositionCategory(): PositionCategory { return this.positionCategory }

  public onReload(){
    if (PositionCategory.NotConfirm(this.positionCategory))
      return;
    this.positionCategoryService
      .ServiceCollection
      .CollectionOfPosition(this.positionCategory)
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
    editUI.PositionCategory = this.positionCategory;
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
