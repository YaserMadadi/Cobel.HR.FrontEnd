import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { TargetSetting } from '../targetSetting';
import { TargetSettingService } from '../targetSetting.service';

import { BehavioralObjective } from '../../BehavioralObjective/behavioralObjective';
import { BehavioralObjectiveMasterUI } from '../../BehavioralObjective/master/behavioralObjective.master';
import { BehavioralObjectiveEditUI } from '../../BehavioralObjective/edit/behavioralObjective.edit';
import { BehavioralObjectiveDeleteUI } from '../../BehavioralObjective/delete/behavioralObjective.delete';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { AuthService } from '../../../../../xcore/security/auth_service';
import { MessageType } from '../../../../../xcore/tools/Enum';



@Component({
  selector: 'targetSetting-behavioralObjective-detail',
  templateUrl: './targetSetting-behavioralObjective.detail.html',
  styleUrls: ['./targetSetting-behavioralObjective.detail.css'],
  providers: [TargetSettingService]
})

@Injectable()
export class TargetSetting_BehavioralObjective_DetailUI extends DetailView<TargetSetting> {

  constructor(private targetSettingService: TargetSettingService) {
    super(targetSettingService);
  }

  public BehavioralObjectiveList: BehavioralObjective[] = [];

  public currentBehavioralObjective: BehavioralObjective = new BehavioralObjective();

  private targetSetting: TargetSetting = new TargetSetting();

  @Input()
  public set TargetSetting(value: TargetSetting) {
    this.targetSetting = value;
    this.onReload();
  }

  public get TargetSetting(): TargetSetting { return this.targetSetting }

  public onReload() {
    if (TargetSetting.NotConfirm(this.targetSetting))
      return;
    this.targetSettingService
      .ServiceCollection
      .CollectionOfBehavioralObjective(this.targetSetting)
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
    editUI.TargetSetting = this.targetSetting;
    console.log(editUI.TargetSetting);
    if (AuthService.currentPositionList.filter(item => item.childCount > 0).length > 0){
      editUI.TargetSetting = this.targetSetting;
      editUI.ShowDialog(new BehavioralObjective());
    }
    else
      MessageController.ShowMessage(MessageType.AddPermissionDenied);
  }

  public onEdit(editUI: BehavioralObjectiveEditUI) {
    if (BehavioralObjective.NotConfirm(this.currentBehavioralObjective))
      return;
    if (AuthService.currentPositionList.filter(item => item.childCount > 0).length > 0){
      editUI.TargetSetting = this.targetSetting;
      editUI.ShowDialog(this.currentBehavioralObjective);
    }
    else
      MessageController.ShowMessage(MessageType.EditPermissionDenied);

  }

  public onDelete(deleteUI: BehavioralObjectiveDeleteUI) {
    if (BehavioralObjective.NotConfirm(this.currentBehavioralObjective))
      return;
    if (AuthService.currentPositionList.filter(item => item.childCount > 0).length > 0)
      deleteUI.ShowDialog(this.currentBehavioralObjective);
    else
      MessageController.ShowMessage(MessageType.DeletePermissionDenied);
  }

  public onEditModal_Closed(behavioralObjective: BehavioralObjective) {
    this.onReload();
  }

  public onDeleteModal_Closed(result: boolean) {
    this.onReload();
  }
}