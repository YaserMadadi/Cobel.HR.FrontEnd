import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { TargetSetting } from '../targetSetting';
import { TargetSettingService } from '../targetSetting.service';

import { FunctionalObjective } from '../../FunctionalObjective/functionalObjective';
import { FunctionalObjectiveMasterUI } from '../../FunctionalObjective/master/functionalObjective.master';
import { FunctionalObjectiveEditUI } from '../../FunctionalObjective/edit/functionalObjective.edit';
import { FunctionalObjectiveDeleteUI } from '../../FunctionalObjective/delete/functionalObjective.delete';
import { AuthService } from '../../../../../xcore/security/auth_service';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { MessageType } from '../../../../../xcore/tools/Enum';



@Component({
  selector: 'targetSetting-functionalObjective-detail',
  templateUrl: './targetSetting-functionalObjective.detail.html',
  styleUrls: ['./targetSetting-functionalObjective.detail.css'],
  
})
export class TargetSetting_FunctionalObjective_DetailUI extends DetailView<TargetSetting> {

  constructor(private targetSettingService: TargetSettingService) {
    super(targetSettingService);
  }

  public FunctionalObjectiveList: FunctionalObjective[] = [];

  public currentFunctionalObjective: FunctionalObjective = new FunctionalObjective();

  private targetSetting: TargetSetting = new TargetSetting();

  @Input()
  public set TargetSetting(value: TargetSetting) {
    this.targetSetting = value;
    this.onReload();
  }

  public get TargetSetting(): TargetSetting {
    return this.targetSetting;
  }

  public onReload() {
    if (TargetSetting.NotConfirm(this.targetSetting))
      return;
    this.targetSettingService
      .ServiceCollection
      .CollectionOfFunctionalObjective(this.targetSetting)
      .then(functionalObjectiveList => {
        this.FunctionalObjectiveList = functionalObjectiveList;
        this.currentFunctionalObjective = new FunctionalObjective();
      });
  }

  public onSelect(i: number) {
    this.currentFunctionalObjective = this.FunctionalObjectiveList[i];
    if (FunctionalObjective.NotConfirm(this.currentFunctionalObjective))
      this.currentFunctionalObjective = new FunctionalObjective();
  }

  public onDblClicked(masterUI: FunctionalObjectiveMasterUI) {
    if (FunctionalObjective.NotConfirm(this.currentFunctionalObjective))
      return;
    this.currentFunctionalObjective.targetSetting = this.targetSetting;
    masterUI.ShowDialog(this.currentFunctionalObjective);
  }

  private checkTargetSetting(): Boolean {
    //this.targetSetting = await this.targetSettingService.RetrieveById(this.targetSetting.id);
    if(this.targetSetting.isLocked){
      MessageController.ShowMessage(MessageType.RecordIsLocked);
      return false;
    }
    if (this.targetSetting.employee.id == AuthService.currentEmployee.id) {
      MessageController.ShowMessage(MessageType.NotEditable);
      return false;
    }
    return true;
  }

  public async onAdd(editUI: FunctionalObjectiveEditUI) {
    if (!this.checkTargetSetting())
      return;
      
    editUI.TargetSetting = this.targetSetting;
    editUI.ShowDialog(new FunctionalObjective());
  }

  public async onEdit(editUI: FunctionalObjectiveEditUI) {
    if(!this.checkTargetSetting())
      return;

    editUI.TargetSetting = this.targetSetting;
    editUI.ShowDialog(this.currentFunctionalObjective);
  }

  public async onDelete(deleteUI: FunctionalObjectiveDeleteUI) {
    if(!this.checkTargetSetting())
      return;

    deleteUI.ShowDialog(this.currentFunctionalObjective);

  }

  public onEditModal_Closed(functionalObjective: FunctionalObjective) {
    this.onReload();
  }

  public onDeleteModal_Closed(result: boolean) {
    this.onReload();
  }
}