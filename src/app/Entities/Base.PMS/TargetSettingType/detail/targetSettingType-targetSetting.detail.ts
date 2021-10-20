import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { TargetSettingType } from '../targetSettingType';
import { TargetSettingTypeService } from '../targetSettingType.service';

import { TargetSetting } from '../../../PMS/TargetSetting/targetSetting';
import { TargetSettingMasterUI } from '../../../PMS/TargetSetting/master/targetSetting.master';
import { TargetSettingEditUI } from '../../../PMS/TargetSetting/edit/targetSetting.edit';
import { TargetSettingDeleteUI } from '../../../PMS/TargetSetting/delete/targetSetting.delete';



@Component({
  selector: 'targetSettingType-targetSetting-detail',
  templateUrl: './targetSettingType-targetSetting.detail.html',
  styleUrls: ['./targetSettingType-targetSetting.detail.css']
})
export class TargetSettingType_TargetSetting_DetailUI extends DetailView<TargetSettingType> {

  constructor(private targetSettingTypeService: TargetSettingTypeService) {
    super(targetSettingTypeService);
  }

  public TargetSettingList : TargetSetting[] = [];
  
  public currentTargetSetting : TargetSetting = new TargetSetting();

  private targetSettingType: TargetSettingType = new TargetSettingType();

  @Input()
  public set TargetSettingType(value: TargetSettingType) {
    this.targetSettingType = value;
    this.onReload();
  }

  public get TargetSettingType(): TargetSettingType { return this.targetSettingType }

  public onReload(){
    if (TargetSettingType.NotConfirm(this.targetSettingType))
      return;
    this.targetSettingTypeService
      .ServiceCollection
      .CollectionOfTargetSetting(this.targetSettingType)
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
    editUI.TargetSettingType = this.targetSettingType;
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
