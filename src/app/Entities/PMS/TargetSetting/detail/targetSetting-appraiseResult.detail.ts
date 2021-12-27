import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { TargetSetting } from '../targetSetting';
import { TargetSettingService } from '../targetSetting.service';

import { AppraiseResult } from '../../AppraiseResult/appraiseResult';
import { AppraiseResultMasterUI } from '../../AppraiseResult/master/appraiseResult.master';
import { AppraiseResultEditUI } from '../../AppraiseResult/edit/appraiseResult.edit';
import { AppraiseResultDeleteUI } from '../../AppraiseResult/delete/appraiseResult.delete';


@Component({
  selector: 'targetSetting-appraiseResult-detail',
  templateUrl: './targetSetting-appraiseResult.detail.html',
  styleUrls: ['./targetSetting-appraiseResult.detail.css']
})
export class TargetSetting_AppraiseResult_DetailUI extends DetailView<TargetSetting> {

  constructor(private targetSettingService: TargetSettingService) {
    super(targetSettingService);
  }

  public AppraiseResultList : AppraiseResult[] = [];
  
  public currentAppraiseResult : AppraiseResult = new AppraiseResult();

  private targetSetting: TargetSetting = new TargetSetting();

  @Input()
  public set TargetSetting(value: TargetSetting) {
    this.targetSetting = value;
    this.onReload();
  }

  public get TargetSetting(): TargetSetting { return this.targetSetting }

  public onReload(){
    if (TargetSetting.NotConfirm(this.targetSetting))
      return;
    this.targetSettingService
      .ServiceCollection
      .CollectionOfAppraiseResult(this.targetSetting)
      .then(appraiseResultList => {
        this.AppraiseResultList = appraiseResultList;
        this.currentAppraiseResult = new AppraiseResult();
      });
  }

  public onSelect(i: number) {
    this.currentAppraiseResult = this.AppraiseResultList[i];
    if (AppraiseResult.NotConfirm(this.currentAppraiseResult))
      this.currentAppraiseResult = new AppraiseResult();
  }

  public onDblClicked(masterUI: AppraiseResultMasterUI) {
    if (AppraiseResult.NotConfirm(this.currentAppraiseResult))
      return;
    this.currentAppraiseResult.targetSetting = this.targetSetting;
    masterUI.ShowDialog(this.currentAppraiseResult);
  }

  public onAdd(editUI: AppraiseResultEditUI) {
    editUI.TargetSetting = this.targetSetting;
    editUI.ShowDialog(new AppraiseResult());
  }

  public onEdit(editUI: AppraiseResultEditUI) {
    if (AppraiseResult.NotConfirm(this.currentAppraiseResult))
      return;
    editUI.ShowDialog(this.currentAppraiseResult);
  }

  public onDelete(deleteUI: AppraiseResultDeleteUI) {
    if (AppraiseResult.NotConfirm(this.currentAppraiseResult))
      return;
    deleteUI.ShowDialog(this.currentAppraiseResult);
  }

  public onEditModal_Closed(appraiseResult: AppraiseResult) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}