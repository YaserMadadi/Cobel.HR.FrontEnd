import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { FunctionalKPI } from '../functionalKPI';
import { FunctionalKPIService } from '../functionalKPI.service';

import { FunctionalKPIComment } from '../../FunctionalKPIComment/functionalKPIComment';
import { FunctionalKPICommentMasterUI } from '../../FunctionalKPIComment/master/functionalKPIComment.master';
import { FunctionalKPICommentEditUI } from '../../FunctionalKPIComment/edit/functionalKPIComment.edit';
import { FunctionalKPICommentDeleteUI } from '../../FunctionalKPIComment/delete/functionalKPIComment.delete';



@Component({
  selector: 'functionalKPI-functionalKPIComment-detail',
  templateUrl: './functionalKPI-functionalKPIComment.detail.html',
  styleUrls: ['./functionalKPI-functionalKPIComment.detail.css']
})
export class FunctionalKPI_FunctionalKPIComment_DetailUI extends DetailView<FunctionalKPI> {

  constructor(private functionalKPIService: FunctionalKPIService) {
    super(functionalKPIService);
  }

  public FunctionalKPICommentList : FunctionalKPIComment[] = [];
  
  public currentFunctionalKPIComment : FunctionalKPIComment = new FunctionalKPIComment();

  private functionalKPI: FunctionalKPI = new FunctionalKPI();

  @Input()
  public set FunctionalKPI(value: FunctionalKPI) {
    this.functionalKPI = value;
    this.onReload();
  }

  public get FunctionalKPI(): FunctionalKPI { return this.functionalKPI }

  public onReload(){
    if (FunctionalKPI.NotConfirm(this.functionalKPI))
      return;
    this.functionalKPIService
      .ServiceCollection
      .CollectionOfFunctionalKPIComment(this.functionalKPI)
      .then(functionalKPICommentList => {
        this.FunctionalKPICommentList = functionalKPICommentList;
        this.currentFunctionalKPIComment = new FunctionalKPIComment();
      });
  }

  public onSelect(i: number) {
    this.currentFunctionalKPIComment = this.FunctionalKPICommentList[i];
    if (FunctionalKPIComment.NotConfirm(this.currentFunctionalKPIComment))
      this.currentFunctionalKPIComment = new FunctionalKPIComment();
  }

  public onDblClicked(masterUI: FunctionalKPICommentMasterUI) {
    if (FunctionalKPIComment.NotConfirm(this.currentFunctionalKPIComment))
      return;
    masterUI.ShowDialog(this.currentFunctionalKPIComment);
  }

  public onAdd(editUI: FunctionalKPICommentEditUI) {
    editUI.FunctionalKPI = this.functionalKPI;
    editUI.ShowDialog(new FunctionalKPIComment());
  }

  public onEdit(editUI: FunctionalKPICommentEditUI) {
    if (FunctionalKPIComment.NotConfirm(this.currentFunctionalKPIComment))
      return;
    editUI.ShowDialog(this.currentFunctionalKPIComment);
  }

  public onDelete(deleteUI: FunctionalKPICommentDeleteUI) {
    if (FunctionalKPIComment.NotConfirm(this.currentFunctionalKPIComment))
      return;
    deleteUI.ShowDialog(this.currentFunctionalKPIComment);
  }

  public onEditModal_Closed(functionalKPIComment: FunctionalKPIComment) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}