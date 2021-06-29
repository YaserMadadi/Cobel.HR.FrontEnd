import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { ExpectedLevel } from '../expectedLevel';
import { ExpectedLevelService } from '../expectedLevel.service';

import { BehavioralObjective } from '../../../PMS/BehavioralObjective/behavioralObjective';
import { BehavioralObjectiveMasterUI } from '../../../PMS/BehavioralObjective/master/behavioralObjective.master';
import { BehavioralObjectiveEditUI } from '../../../PMS/BehavioralObjective/edit/behavioralObjective.edit';
import { BehavioralObjectiveDeleteUI } from '../../../PMS/BehavioralObjective/delete/behavioralObjective.delete';



@Component({
  selector: 'expectedLevel-behavioralObjective-detail',
  templateUrl: './expectedLevel-behavioralObjective.detail.html',
  styleUrls: ['./expectedLevel-behavioralObjective.detail.css'],
  providers: [ExpectedLevelService]
}) 

@Injectable()
export class ExpectedLevel_BehavioralObjective_DetailUI extends DetailView<ExpectedLevel> {

  constructor(private expectedLevelService: ExpectedLevelService) {
    super(expectedLevelService);
  }

  public BehavioralObjectiveList : BehavioralObjective[] = [];
  
  public currentBehavioralObjective : BehavioralObjective = new BehavioralObjective();

  private expectedLevel: ExpectedLevel = new ExpectedLevel();

  @Input()
  public set ExpectedLevel(value: ExpectedLevel) {
    this.expectedLevel = value;
    this.onReload();
  }

  public get ExpectedLevel(): ExpectedLevel { return this.expectedLevel }

  public onReload(){
    if (ExpectedLevel.NotConfirm(this.expectedLevel))
      return;
    this.expectedLevelService
      .ServiceCollection
      .CollectionOfBehavioralObjective(this.expectedLevel)
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
    editUI.ExpectedLevel = this.expectedLevel;
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