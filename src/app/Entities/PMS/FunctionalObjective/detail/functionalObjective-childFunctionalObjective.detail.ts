import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { FunctionalObjective } from '../functionalObjective';
import { FunctionalObjectiveService } from '../functionalObjective.service';

import { FunctionalObjectiveMasterUI } from '../master/functionalObjective.master';
import { FunctionalObjectiveEditUI } from '../edit/functionalObjective.edit';
import { FunctionalObjectiveDeleteUI } from '../delete/functionalObjective.delete';



@Component({
  selector: 'functionalObjective-childFunctionalObjective-detail',
  templateUrl: './functionalObjective-childFunctionalObjective.detail.html',
  styleUrls: ['./functionalObjective-childFunctionalObjective.detail.css']
})
export class FunctionalObjective_ChildFunctionalObjective_DetailUI extends DetailView<FunctionalObjective> {

  constructor(private functionalObjectiveService: FunctionalObjectiveService) {
    super(functionalObjectiveService);
  }

  public FunctionalObjectiveList : FunctionalObjective[] = [];
  
  public currentFunctionalObjective : FunctionalObjective = new FunctionalObjective();

  private parentalFunctionalObjective: FunctionalObjective = new FunctionalObjective();

  @Input()
  public set ParentalFunctionalObjective(value: FunctionalObjective) {
    this.parentalFunctionalObjective = value;
    this.onReload();
  }

  public get ParentalFunctionalObjective(): FunctionalObjective { return this.parentalFunctionalObjective }

  public onReload(){
    if (FunctionalObjective.NotConfirm(this.parentalFunctionalObjective))
      return;
    this.functionalObjectiveService
      .ServiceCollection
      .CollectionOfChildFunctionalObjective(this.parentalFunctionalObjective)
      .then(functionalObjectiveList => {
        this.FunctionalObjectiveList = functionalObjectiveList;
        this.currentFunctionalObjective = new FunctionalObjective();
      });
  }

  public onSelect(i: number) {
    this.currentFunctionalObjective = this.FunctionalObjectiveList[i];
    if (FunctionalObjective.NotConfirm(this.currentFunctionalObjective))
      this.currentFunctionalObjective = new FunctionalObjective();
  }

  // public onDblClicked(masterUI: FunctionalObjectiveMasterUI) {
  //   // if (FunctionalObjective.NotConfirm(this.currentFunctionalObjective))
  //   //   return;
  //   // masterUI.ShowDialog(this.currentFunctionalObjective);
  // }

  public onAdd(editUI: FunctionalObjectiveEditUI) {
    editUI.ParentalFunctionalObjective = this.parentalFunctionalObjective;
    editUI.ShowDialog(new FunctionalObjective());
  }

  public onEdit(editUI: FunctionalObjectiveEditUI) {
    if (FunctionalObjective.NotConfirm(this.currentFunctionalObjective))
      return;
    editUI.ShowDialog(this.currentFunctionalObjective);
  }

  public onDelete(deleteUI: FunctionalObjectiveDeleteUI) {
    if (FunctionalObjective.NotConfirm(this.currentFunctionalObjective))
      return;
    deleteUI.ShowDialog(this.currentFunctionalObjective);
  }

  public onEditModal_Closed(functionalObjective: FunctionalObjective) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}