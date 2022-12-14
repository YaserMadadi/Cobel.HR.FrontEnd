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
import { PositionController } from '../../../../../xcore/tools/controller.positions';



@Component({
  selector: 'targetSetting-behavioralObjective-detail',
  templateUrl: './targetSetting-behavioralObjective.detail.html',
  styleUrls: ['./targetSetting-behavioralObjective.detail.css'],

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
    this.currentBehavioralObjective.targetSetting = this.targetSetting;
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
        this.BehavioralObjectiveList.forEach(i => i.targetSetting = this.targetSetting);
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
    this.currentBehavioralObjective.targetSetting = this.targetSetting;
    masterUI.ShowDialog(this.currentBehavioralObjective);
  }

  private async checkTargetSetting(): Promise<Boolean> {
    
    if (this.currentBehavioralObjective.targetSetting.isLocked) {
      MessageController.ShowMessage(MessageType.RecordIsLocked);
      return false;
    }
    
    // if (this.currentBehavioralObjective.targetSetting.targetSettingMode.id != 2) {  // TargetSettingMode_Id = 2 : Target Reviewing
    //   MessageController.ShowMessage(MessageType.NotTargetReviewingMode);
    //   return false;
    // }

    if (!PositionController.IsCurrentUser(this.targetSetting.appraiser) &&
      !PositionController.IsPMSAdmin() &&
      !PositionController.IsAdmin()) {
      MessageController.ShowMessage(MessageType.YouAreNotAppraiser);
      return false;
    }
    
    return true;
  }

  public async onAdd(editUI: BehavioralObjectiveEditUI) {
    let result = await this.checkTargetSetting();
    if (!result)
      return;
    editUI.TargetSetting = this.targetSetting;
    editUI.ShowDialog(new BehavioralObjective());
  }

  public async onEdit(editUI: BehavioralObjectiveEditUI) {
    let result = await this.checkTargetSetting();
    if (!result)
      return;
    if (BehavioralObjective.NotConfirm(this.currentBehavioralObjective))
      return;
    editUI.TargetSetting = this.targetSetting;
    editUI.ShowDialog(this.currentBehavioralObjective);
  }

  public async onDelete(deleteUI: BehavioralObjectiveDeleteUI) {
    let result = await this.checkTargetSetting();
    if (!result)
      return;
    if (BehavioralObjective.NotConfirm(this.currentBehavioralObjective))
      return;
    deleteUI.ShowDialog(this.currentBehavioralObjective);
  }

  public onEditModal_Closed(behavioralObjective: BehavioralObjective) {
    this.onReload();
  }

  public onDeleteModal_Closed(result: boolean) {
    this.onReload();
  }
}