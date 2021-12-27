import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { TargetSettingMode } from '../targetSettingMode';
import { TargetSettingModeService } from '../targetSettingMode.service';

import { TargetSetting } from '../../../PMS/TargetSetting/targetSetting';
import { TargetSettingMasterUI } from '../../../PMS/TargetSetting/master/targetSetting.master';
import { TargetSettingEditUI } from '../../../PMS/TargetSetting/edit/targetSetting.edit';
import { TargetSettingDeleteUI } from '../../../PMS/TargetSetting/delete/targetSetting.delete';



@Component({
  selector: 'targetSettingMode-targetSetting-detail',
  templateUrl: './targetSettingMode-targetSetting.detail.html',
  styleUrls: ['./targetSettingMode-targetSetting.detail.css']
})
export class TargetSettingMode_TargetSetting_DetailUI extends DetailView<TargetSettingMode> {

  constructor(private targetSettingModeService: TargetSettingModeService) {
    super(targetSettingModeService);
  }

  public TargetSettingList : TargetSetting[] = [];
  
  public currentTargetSetting : TargetSetting = new TargetSetting();

  private targetSettingMode: TargetSettingMode = new TargetSettingMode();

  @Input()
  public set TargetSettingMode(value: TargetSettingMode) {
    this.targetSettingMode = value;
    this.onReload();
  }

  public get TargetSettingMode(): TargetSettingMode { return this.targetSettingMode }

  public onReload(){
    if (TargetSettingMode.NotConfirm(this.targetSettingMode))
      return;
    this.targetSettingModeService
      .ServiceCollection
      .CollectionOfTargetSetting(this.targetSettingMode)
      .then(targetSettingList => {
        this.TargetSettingList = targetSettingList;
        this.currentTargetSetting = new TargetSetting();
      });
  }

  public onSelect(i: number) {
    this.currentTargetSetting = this.TargetSettingList[i];
    if (TargetSetting.NotConfirm(this.currentTargetSetting))
      this.currentTargetSetting = new TargetSetting();
  }

  public onDblClicked(masterUI: TargetSettingMasterUI) {
    if (TargetSetting.NotConfirm(this.currentTargetSetting))
      return;
    masterUI.ShowDialog(this.currentTargetSetting);
  }

  public onAdd(editUI: TargetSettingEditUI) {
    editUI.TargetSettingMode = this.targetSettingMode;
    editUI.ShowDialog(new TargetSetting());
  }

  public onEdit(editUI: TargetSettingEditUI) {
    if (TargetSetting.NotConfirm(this.currentTargetSetting))
      return;
    editUI.ShowDialog(this.currentTargetSetting);
  }

  public onDelete(deleteUI: TargetSettingDeleteUI) {
    if (TargetSetting.NotConfirm(this.currentTargetSetting))
      return;
    deleteUI.ShowDialog(this.currentTargetSetting);
  }

  public onEditModal_Closed(targetSetting: TargetSetting) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
