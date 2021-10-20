import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { ScoreCell } from '../scoreCell';
import { ScoreCellService } from '../scoreCell.service';

import { NonOperationalAppraise } from '../../NonOperationalAppraise/nonOperationalAppraise';
import { NonOperationalAppraiseMasterUI } from '../../NonOperationalAppraise/master/nonOperationalAppraise.master';
import { NonOperationalAppraiseEditUI } from '../../NonOperationalAppraise/edit/nonOperationalAppraise.edit';
import { NonOperationalAppraiseDeleteUI } from '../../NonOperationalAppraise/delete/nonOperationalAppraise.delete';



@Component({
  selector: 'scoreCell-nonOperationalAppraise-detail',
  templateUrl: './scoreCell-nonOperationalAppraise.detail.html',
  styleUrls: ['./scoreCell-nonOperationalAppraise.detail.css']
})
export class ScoreCell_NonOperationalAppraise_DetailUI extends DetailView<ScoreCell> {

  constructor(private scoreCellService: ScoreCellService) {
    super(scoreCellService);
  }

  public NonOperationalAppraiseList : NonOperationalAppraise[] = [];
  
  public currentNonOperationalAppraise : NonOperationalAppraise = new NonOperationalAppraise();

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
      .CollectionOfNonOperationalAppraise(this.scoreCell)
      .then(nonOperationalAppraiseList => {
        this.NonOperationalAppraiseList = nonOperationalAppraiseList;
        this.currentNonOperationalAppraise = new NonOperationalAppraise();
      });
  }

  public onSelect(i: number) {
    this.currentNonOperationalAppraise = this.NonOperationalAppraiseList[i];
    if (NonOperationalAppraise.NotConfirm(this.currentNonOperationalAppraise))
      this.currentNonOperationalAppraise = new NonOperationalAppraise();
  }

  public onDblClicked(masterUI: NonOperationalAppraiseMasterUI) {
    if (NonOperationalAppraise.NotConfirm(this.currentNonOperationalAppraise))
      return;
    masterUI.ShowDialog(this.currentNonOperationalAppraise);
  }

  public onAdd(editUI: NonOperationalAppraiseEditUI) {
    editUI.ScoreCell = this.scoreCell;
    editUI.ShowDialog(new NonOperationalAppraise());
  }

  public onEdit(editUI: NonOperationalAppraiseEditUI) {
    if (NonOperationalAppraise.NotConfirm(this.currentNonOperationalAppraise))
      return;
    editUI.ShowDialog(this.currentNonOperationalAppraise);
  }

  public onDelete(deleteUI: NonOperationalAppraiseDeleteUI) {
    if (NonOperationalAppraise.NotConfirm(this.currentNonOperationalAppraise))
      return;
    deleteUI.ShowDialog(this.currentNonOperationalAppraise);
  }

  public onEditModal_Closed(nonOperationalAppraise: NonOperationalAppraise) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}