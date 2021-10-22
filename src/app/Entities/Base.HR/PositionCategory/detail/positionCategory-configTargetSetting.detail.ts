import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { PositionCategory } from '../positionCategory';
import { PositionCategoryService } from '../positionCategory.service';

import { ConfigTargetSetting } from '../../../PMS/ConfigTargetSetting/configTargetSetting';
import { ConfigTargetSettingMasterUI } from '../../../PMS/ConfigTargetSetting/master/configTargetSetting.master';
import { ConfigTargetSettingEditUI } from '../../../PMS/ConfigTargetSetting/edit/configTargetSetting.edit';
import { ConfigTargetSettingDeleteUI } from '../../../PMS/ConfigTargetSetting/delete/configTargetSetting.delete';



@Component({
  selector: 'positionCategory-configTargetSetting-detail',
  templateUrl: './positionCategory-configTargetSetting.detail.html',
  styleUrls: ['./positionCategory-configTargetSetting.detail.css']
})
export class PositionCategory_ConfigTargetSetting_DetailUI extends DetailView<PositionCategory> {

  constructor(private positionCategoryService: PositionCategoryService) {
    super(positionCategoryService);
  }

  public ConfigTargetSettingList : ConfigTargetSetting[] = [];
  
  public currentConfigTargetSetting : ConfigTargetSetting = new ConfigTargetSetting();

  private positionCategory: PositionCategory = new PositionCategory();

  @Input()
  public set PositionCategory(value: PositionCategory) {
    this.positionCategory = value;
    this.onReload();
  }

  public get PositionCategory(): PositionCategory { return this.positionCategory }

  public onReload(){
    if (PositionCategory.NotConfirm(this.positionCategory))
      return;
    this.positionCategoryService
      .ServiceCollection
      .CollectionOfConfigTargetSetting(this.positionCategory)
      .then(configTargetSettingList => {
        this.ConfigTargetSettingList = configTargetSettingList;
        this.currentConfigTargetSetting = new ConfigTargetSetting();
      });
  }

  public onSelect(i: number) {
    this.currentConfigTargetSetting = this.ConfigTargetSettingList[i];
    if (ConfigTargetSetting.NotConfirm(this.currentConfigTargetSetting))
      this.currentConfigTargetSetting = new ConfigTargetSetting();
  }

  public onDblClicked(masterUI: ConfigTargetSettingMasterUI) {
    if (ConfigTargetSetting.NotConfirm(this.currentConfigTargetSetting))
      return;
    masterUI.ShowDialog(this.currentConfigTargetSetting);
  }

  public onAdd(editUI: ConfigTargetSettingEditUI) {
    editUI.positionCategory = this.positionCategory;
    editUI.ShowDialog(new ConfigTargetSetting());
  }

  public onEdit(editUI: ConfigTargetSettingEditUI) {
    if (ConfigTargetSetting.NotConfirm(this.currentConfigTargetSetting))
      return;
    editUI.ShowDialog(this.currentConfigTargetSetting);
  }

  public onDelete(deleteUI: ConfigTargetSettingDeleteUI) {
    if (ConfigTargetSetting.NotConfirm(this.currentConfigTargetSetting))
      return;
    deleteUI.ShowDialog(this.currentConfigTargetSetting);
  }

  public onEditModal_Closed(configTargetSetting: ConfigTargetSetting) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
