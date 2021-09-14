import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { UniversityDegree } from '../universityDegree';
import { UniversityDegreeService } from '../universityDegree.service';

import { UniversityHistory } from '../../../HR/UniversityHistory/universityHistory';
import { UniversityHistoryMasterUI } from '../../../HR/UniversityHistory/master/universityHistory.master';
import { UniversityHistoryEditUI } from '../../../HR/UniversityHistory/edit/universityHistory.edit';
import { UniversityHistoryDeleteUI } from '../../../HR/UniversityHistory/delete/universityHistory.delete';



@Component({
  selector: 'universityDegree-universityHistory-detail',
  templateUrl: './universityDegree-universityHistory.detail.html',
  styleUrls: ['./universityDegree-universityHistory.detail.css']
})
export class UniversityDegree_UniversityHistory_DetailUI extends DetailView<UniversityDegree> {

  constructor(private universityDegreeService: UniversityDegreeService) {
    super(universityDegreeService);
  }

  public UniversityHistoryList : UniversityHistory[] = [];
  
  public currentUniversityHistory : UniversityHistory = new UniversityHistory();

  private universityDegree: UniversityDegree = new UniversityDegree();

  @Input()
  public set UniversityDegree(value: UniversityDegree) {
    this.universityDegree = value;
    this.onReload();
  }

  public get UniversityDegree(): UniversityDegree { return this.universityDegree }

  public onReload(){
    if (UniversityDegree.NotConfirm(this.universityDegree))
      return;
    this.universityDegreeService
      .ServiceCollection
      .CollectionOfUniversityHistory(this.universityDegree)
      .then(universityHistoryList => {
        this.UniversityHistoryList = universityHistoryList;
        this.currentUniversityHistory = new UniversityHistory();
      });
  }

  public onSelect(i: number) {
    this.currentUniversityHistory = this.UniversityHistoryList[i];
    if (UniversityHistory.NotConfirm(this.currentUniversityHistory))
      this.currentUniversityHistory = new UniversityHistory();
  }

  public onDblClicked(masterUI: UniversityHistoryMasterUI) {
    if (UniversityHistory.NotConfirm(this.currentUniversityHistory))
      return;
    masterUI.ShowDialog(this.currentUniversityHistory);
  }

  public onAdd(editUI: UniversityHistoryEditUI) {
    editUI.UniversityDegree = this.universityDegree;
    editUI.ShowDialog(new UniversityHistory());
  }

  public onEdit(editUI: UniversityHistoryEditUI) {
    if (UniversityHistory.NotConfirm(this.currentUniversityHistory))
      return;
    editUI.ShowDialog(this.currentUniversityHistory);
  }

  public onDelete(deleteUI: UniversityHistoryDeleteUI) {
    if (UniversityHistory.NotConfirm(this.currentUniversityHistory))
      return;
    deleteUI.ShowDialog(this.currentUniversityHistory);
  }

  public onEditModal_Closed(universityHistory: UniversityHistory) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}