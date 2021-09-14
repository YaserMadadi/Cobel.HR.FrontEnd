import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { CompetencyItem } from '../competencyItem';
import { CompetencyItemService } from '../competencyItem.service';

import { BehavioralObjective } from '../../BehavioralObjective/behavioralObjective';
import { BehavioralObjectiveMasterUI } from '../../BehavioralObjective/master/behavioralObjective.master';
import { BehavioralObjectiveEditUI } from '../../BehavioralObjective/edit/behavioralObjective.edit';
import { BehavioralObjectiveDeleteUI } from '../../BehavioralObjective/delete/behavioralObjective.delete';



@Component({
  selector: 'competencyItem-behavioralObjective-detail',
  templateUrl: './competencyItem-behavioralObjective.detail.html',
  styleUrls: ['./competencyItem-behavioralObjective.detail.css']
})
export class CompetencyItem_BehavioralObjective_DetailUI extends DetailView<CompetencyItem> {

  constructor(private competencyItemService: CompetencyItemService) {
    super(competencyItemService);
  }

  public BehavioralObjectiveList : BehavioralObjective[] = [];
  
  public currentBehavioralObjective : BehavioralObjective = new BehavioralObjective();

  private competencyItem: CompetencyItem = new CompetencyItem();

  @Input()
  public set CompetencyItem(value: CompetencyItem) {
    this.competencyItem = value;
    this.onReload();
  }

  public get CompetencyItem(): CompetencyItem { return this.competencyItem }

  public onReload(){
    if (CompetencyItem.NotConfirm(this.competencyItem))
      return;
    this.competencyItemService
      .ServiceCollection
      .CollectionOfBehavioralObjective(this.competencyItem)
      .then(behavioralObjectiveList => {
        this.BehavioralObjectiveList = behavioralObjectiveList;
        this.currentBehavioralObjective = new BehavioralObjective();
      });
  }

  public onSelect(i: number) {
    this.currentBehavioralObjective = this.BehavioralObjectiveList[i];
    if (BehavioralObjective.NotConfirm(this.currentBehavioralObjective))
      this.currentBehavioralObjective = new BehavioralObjective();
  }

  public onDblClicked(masterUI: BehavioralObjectiveMasterUI) {
    if (BehavioralObjective.NotConfirm(this.currentBehavioralObjective))
      return;
    masterUI.ShowDialog(this.currentBehavioralObjective);
  }

  public onAdd(editUI: BehavioralObjectiveEditUI) {
    editUI.CompetencyItem = this.competencyItem;
    editUI.ShowDialog(new BehavioralObjective());
  }

  public onEdit(editUI: BehavioralObjectiveEditUI) {
    if (BehavioralObjective.NotConfirm(this.currentBehavioralObjective))
      return;
    editUI.ShowDialog(this.currentBehavioralObjective);
  }

  public onDelete(deleteUI: BehavioralObjectiveDeleteUI) {
    if (BehavioralObjective.NotConfirm(this.currentBehavioralObjective))
      return;
    deleteUI.ShowDialog(this.currentBehavioralObjective);
  }

  public onEditModal_Closed(behavioralObjective: BehavioralObjective) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}