import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { TargetSetting } from '../targetSetting';
import { TargetSettingService } from '../targetSetting.service';

import { FinalApprovement } from '../../FinalApprovement/finalApprovement';
import { FinalApprovementMasterUI } from '../../FinalApprovement/master/finalApprovement.master';
import { FinalApprovementEditUI } from '../../FinalApprovement/edit/finalApprovement.edit';
import { FinalApprovementDeleteUI } from '../../FinalApprovement/delete/finalApprovement.delete';



@Component({
  selector: 'targetSetting-finalApprovement-detail',
  templateUrl: './targetSetting-finalApprovement.detail.html',
  styleUrls: ['./targetSetting-finalApprovement.detail.css']
})
export class TargetSetting_FinalApprovement_DetailUI extends DetailView<TargetSetting> {

  constructor(private targetSettingService: TargetSettingService) {
    super(targetSettingService);
  }

  public FinalApprovementList : FinalApprovement[] = [];
  
  public currentFinalApprovement : FinalApprovement = new FinalApprovement();

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
      .CollectionOfFinalApprovement(this.targetSetting)
      .then(finalApprovementList => {
        this.FinalApprovementList = finalApprovementList;
        this.currentFinalApprovement = new FinalApprovement();
      });
  }

  public onSelect(i: number) {
    this.currentFinalApprovement = this.FinalApprovementList[i];
    if (FinalApprovement.NotConfirm(this.currentFinalApprovement))
      this.currentFinalApprovement = new FinalApprovement();
  }

  public onDblClicked(masterUI: FinalApprovementMasterUI) {
    if (FinalApprovement.NotConfirm(this.currentFinalApprovement))
      return;
    masterUI.ShowDialog(this.currentFinalApprovement);
  }

  public onAdd(editUI: FinalApprovementEditUI) {
    editUI.TargetSetting = this.targetSetting;
    editUI.ShowDialog(new FinalApprovement());
  }

  public onEdit(editUI: FinalApprovementEditUI) {
    if (FinalApprovement.NotConfirm(this.currentFinalApprovement))
      return;
    editUI.ShowDialog(this.currentFinalApprovement);
  }

  public onDelete(deleteUI: FinalApprovementDeleteUI) {
    if (FinalApprovement.NotConfirm(this.currentFinalApprovement))
      return;
    deleteUI.ShowDialog(this.currentFinalApprovement);
  }

  public onEditModal_Closed(finalApprovement: FinalApprovement) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}