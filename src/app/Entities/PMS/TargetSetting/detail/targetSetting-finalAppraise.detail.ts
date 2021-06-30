﻿import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { TargetSetting } from '../targetSetting';
import { TargetSettingService } from '../targetSetting.service';

import { FinalAppraise } from '../../FinalAppraise/finalAppraise';
import { FinalAppraiseMasterUI } from '../../FinalAppraise/master/finalAppraise.master';
import { FinalAppraiseEditUI } from '../../FinalAppraise/edit/finalAppraise.edit';
import { FinalAppraiseDeleteUI } from '../../FinalAppraise/delete/finalAppraise.delete';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { MessageType } from '../../../../../xcore/tools/Enum';
import { AuthService } from '../../../../../xcore/security/auth_service';



@Component({
  selector: 'targetSetting-finalAppraise-detail',
  templateUrl: './targetSetting-finalAppraise.detail.html',
  styleUrls: ['./targetSetting-finalAppraise.detail.css'],
  providers: [TargetSettingService]
})

@Injectable()
export class TargetSetting_FinalAppraise_DetailUI extends DetailView<TargetSetting> {

  constructor(private targetSettingService: TargetSettingService) {
    super(targetSettingService);
  }

  public FinalAppraiseList: FinalAppraise[] = [];

  public currentFinalAppraise: FinalAppraise = new FinalAppraise();

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
      .CollectionOfFinalAppraise(this.targetSetting)
      .then(finalAppraiseList => {
        this.FinalAppraiseList = finalAppraiseList;
        this.currentFinalAppraise = new FinalAppraise();
      });
  }

  public onSelect(i: number) {
    this.currentFinalAppraise = this.FinalAppraiseList[i];
    if (FinalAppraise.NotConfirm(this.currentFinalAppraise))
      this.currentFinalAppraise = new FinalAppraise();
  }

  public onDblClicked(masterUI: FinalAppraiseMasterUI) {
    if (FinalAppraise.NotConfirm(this.currentFinalAppraise))
      return;
    masterUI.ShowDialog(this.currentFinalAppraise);
  }

  public onAdd(editUI: FinalAppraiseEditUI) {
    editUI.TargetSetting = this.targetSetting;
    editUI.ShowDialog(new FinalAppraise());
  }

  public onEdit(editUI: FinalAppraiseEditUI) {
    if (FinalAppraise.NotConfirm(this.currentFinalAppraise))
      return;
    if (AuthService.currentPositionList.filter(i => i.id == 2131 || i.parent.id == 2131).length == 0  //Position.Id = 2131 : HR position responsible
      && this.currentFinalAppraise.isApproved) {
      MessageController.ShowMessage(MessageType.NotEditable);
      return;
    }
    editUI.ShowDialog(this.currentFinalAppraise);
  }

  public onDelete(deleteUI: FinalAppraiseDeleteUI) {
    if (FinalAppraise.NotConfirm(this.currentFinalAppraise))
      return;
    deleteUI.ShowDialog(this.currentFinalAppraise);
  }

  public onEditModal_Closed(finalAppraise: FinalAppraise) {
    this.onReload();
  }

  public onDeleteModal_Closed(result: boolean) {
    this.onReload();
  }
}