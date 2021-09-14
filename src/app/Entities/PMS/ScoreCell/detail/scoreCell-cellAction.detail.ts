import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { ScoreCell } from '../scoreCell';
import { ScoreCellService } from '../scoreCell.service';

import { CellAction } from '../../CellAction/cellAction';
import { CellActionMasterUI } from '../../CellAction/master/cellAction.master';
import { CellActionEditUI } from '../../CellAction/edit/cellAction.edit';
import { CellActionDeleteUI } from '../../CellAction/delete/cellAction.delete';



@Component({
  selector: 'scoreCell-cellAction-detail',
  templateUrl: './scoreCell-cellAction.detail.html',
  styleUrls: ['./scoreCell-cellAction.detail.css']
})
export class ScoreCell_CellAction_DetailUI extends DetailView<ScoreCell> {

  constructor(private scoreCellService: ScoreCellService) {
    super(scoreCellService);
  }

  public CellActionList : CellAction[] = [];
  
  public currentCellAction : CellAction = new CellAction();

  private scoreCell: ScoreCell = new ScoreCell();

  @Input()
  public set ScoreCell(value: ScoreCell) {
    this.scoreCell = value;
    this.onReload();
  }

  public get ScoreCell(): ScoreCell { return this.scoreCell }

  public onReload(){
    if (ScoreCell.NotConfirm(this.scoreCell))
      return;
    this.scoreCellService
      .ServiceCollection
      .CollectionOfCellAction(this.scoreCell)
      .then(cellActionList => {
        this.CellActionList = cellActionList;
        this.currentCellAction = new CellAction();
      });
  }

  public onSelect(i: number) {
    this.currentCellAction = this.CellActionList[i];
    if (CellAction.NotConfirm(this.currentCellAction))
      this.currentCellAction = new CellAction();
  }

  public onDblClicked(masterUI: CellActionMasterUI) {
    if (CellAction.NotConfirm(this.currentCellAction))
      return;
    masterUI.ShowDialog(this.currentCellAction);
  }

  public onAdd(editUI: CellActionEditUI) {
    editUI.ScoreCell = this.scoreCell;
    editUI.ShowDialog(new CellAction());
  }

  public onEdit(editUI: CellActionEditUI) {
    if (CellAction.NotConfirm(this.currentCellAction))
      return;
    editUI.ShowDialog(this.currentCellAction);
  }

  public onDelete(deleteUI: CellActionDeleteUI) {
    if (CellAction.NotConfirm(this.currentCellAction))
      return;
    deleteUI.ShowDialog(this.currentCellAction);
  }

  public onEditModal_Closed(cellAction: CellAction) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}