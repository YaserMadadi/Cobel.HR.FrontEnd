import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { ScoreCell } from '../scoreCell';
import { ScoreCellService } from '../scoreCell.service';

import { OperationalAppraise } from '../../OperationalAppraise/operationalAppraise';
import { OperationalAppraiseMasterUI } from '../../OperationalAppraise/master/operationalAppraise.master';
import { OperationalAppraiseEditUI } from '../../OperationalAppraise/edit/operationalAppraise.edit';
import { OperationalAppraiseDeleteUI } from '../../OperationalAppraise/delete/operationalAppraise.delete';



@Component({
  selector: 'scoreCell-operationalAppraise-detail',
  templateUrl: './scoreCell-operationalAppraise.detail.html',
  styleUrls: ['./scoreCell-operationalAppraise.detail.css'],
  providers: [ScoreCellService]
}) 

@Injectable()
export class ScoreCell_OperationalAppraise_DetailUI extends DetailView<ScoreCell> {

  constructor(private scoreCellService: ScoreCellService) {
    super(scoreCellService);
  }

  public OperationalAppraiseList : OperationalAppraise[] = [];
  
  public currentOperationalAppraise : OperationalAppraise = new OperationalAppraise();

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
      .CollectionOfOperationalAppraise(this.scoreCell)
      .then(operationalAppraiseList => {
        this.OperationalAppraiseList = operationalAppraiseList;
        this.currentOperationalAppraise = new OperationalAppraise();
      });
  }

  public onSelect(i: number) {
    this.currentOperationalAppraise = this.OperationalAppraiseList[i];
    if (OperationalAppraise.NotConfirm(this.currentOperationalAppraise))
      this.currentOperationalAppraise = new OperationalAppraise();
  }

  public onDblClicked(masterUI: OperationalAppraiseMasterUI) {
    if (OperationalAppraise.NotConfirm(this.currentOperationalAppraise))
      return;
    masterUI.ShowDialog(this.currentOperationalAppraise);
  }

  public onAdd(editUI: OperationalAppraiseEditUI) {
    editUI.ScoreCell = this.scoreCell;
    editUI.ShowDialog(new OperationalAppraise());
  }

  public onEdit(editUI: OperationalAppraiseEditUI) {
    if (OperationalAppraise.NotConfirm(this.currentOperationalAppraise))
      return;
    editUI.ShowDialog(this.currentOperationalAppraise);
  }

  public onDelete(deleteUI: OperationalAppraiseDeleteUI) {
    if (OperationalAppraise.NotConfirm(this.currentOperationalAppraise))
      return;
    deleteUI.ShowDialog(this.currentOperationalAppraise);
  }

  public onEditModal_Closed(operationalAppraise: OperationalAppraise) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}