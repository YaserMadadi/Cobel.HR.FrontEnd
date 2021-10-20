import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { FunctionalObjective } from '../functionalObjective';
import { FunctionalObjectiveService } from '../functionalObjective.service';

import { FunctionalObjectiveComment } from '../../FunctionalObjectiveComment/functionalObjectiveComment';
import { FunctionalObjectiveCommentMasterUI } from '../../FunctionalObjectiveComment/master/functionalObjectiveComment.master';
import { FunctionalObjectiveCommentEditUI } from '../../FunctionalObjectiveComment/edit/functionalObjectiveComment.edit';
import { FunctionalObjectiveCommentDeleteUI } from '../../FunctionalObjectiveComment/delete/functionalObjectiveComment.delete';



@Component({
  selector: 'functionalObjective-functionalObjectiveComment-detail',
  templateUrl: './functionalObjective-functionalObjectiveComment.detail.html',
  styleUrls: ['./functionalObjective-functionalObjectiveComment.detail.css']
})
export class FunctionalObjective_FunctionalObjectiveComment_DetailUI extends DetailView<FunctionalObjective> {

  constructor(private functionalObjectiveService: FunctionalObjectiveService) {
    super(functionalObjectiveService);
  }

  public FunctionalObjectiveCommentList : FunctionalObjectiveComment[] = [];
  
  public currentFunctionalObjectiveComment : FunctionalObjectiveComment = new FunctionalObjectiveComment();

  private functionalObjective: FunctionalObjective = new FunctionalObjective();

  @Input()
  public set FunctionalObjective(value: FunctionalObjective) {
    this.functionalObjective = value;
    this.onReload();
  }

  public get FunctionalObjective(): FunctionalObjective { return this.functionalObjective }

  public onReload(){
    if (FunctionalObjective.NotConfirm(this.functionalObjective))
      return;
    this.functionalObjectiveService
      .ServiceCollection
      .CollectionOfFunctionalObjectiveComment(this.functionalObjective)
      .then(functionalObjectiveCommentList => {
        this.FunctionalObjectiveCommentList = functionalObjectiveCommentList;
        this.currentFunctionalObjectiveComment = new FunctionalObjectiveComment();
      });
  }

  public onSelect(i: number) {
    this.currentFunctionalObjectiveComment = this.FunctionalObjectiveCommentList[i];
    if (FunctionalObjectiveComment.NotConfirm(this.currentFunctionalObjectiveComment))
      this.currentFunctionalObjectiveComment = new FunctionalObjectiveComment();
  }

  public onDblClicked(masterUI: FunctionalObjectiveCommentMasterUI) {
    if (FunctionalObjectiveComment.NotConfirm(this.currentFunctionalObjectiveComment))
      return;
    masterUI.ShowDialog(this.currentFunctionalObjectiveComment);
  }

  public onAdd(editUI: FunctionalObjectiveCommentEditUI) {
    editUI.FunctionalObjective = this.functionalObjective;
    editUI.ShowDialog(new FunctionalObjectiveComment());
  }

  public onEdit(editUI: FunctionalObjectiveCommentEditUI) {
    if (FunctionalObjectiveComment.NotConfirm(this.currentFunctionalObjectiveComment))
      return;
    editUI.ShowDialog(this.currentFunctionalObjectiveComment);
  }

  public onDelete(deleteUI: FunctionalObjectiveCommentDeleteUI) {
    if (FunctionalObjectiveComment.NotConfirm(this.currentFunctionalObjectiveComment))
      return;
    deleteUI.ShowDialog(this.currentFunctionalObjectiveComment);
  }

  public onEditModal_Closed(functionalObjectiveComment: FunctionalObjectiveComment) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}