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
  providers: [TargetSettingService]
})

@Injectable()
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
    console.log('TargetSetting : ', this.targetSetting);
    if (TargetSetting.NotConfirm(this.targetSetting))
      return;
    this.targetSettingService
      .ServiceCollection
      .CollectionOfFunctionalObjective(this.targetSetting)
      .then(functionalObjectiveList => {
        this.FunctionalObjectiveList = functionalObjectiveList;
        console.log(functionalObjectiveList);

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
    masterUI.ShowDialog(this.currentFunctionalObjective);
  }

  public onAdd(editUI: FunctionalObjectiveEditUI) {
    editUI.TargetSetting = this.targetSetting;
    if (AuthService.currentPositionList.filter(item => item.childCount > 0).length > 0) {
      editUI.TargetSetting = this.targetSetting;
      editUI.ShowDialog(new FunctionalObjective());
    }
    else
      MessageController.ShowMessage(MessageType.AddPermissionDenied);
  }

  public onEdit(editUI: FunctionalObjectiveEditUI) {
    if (FunctionalObjective.NotConfirm(this.currentFunctionalObjective))
      return;
    if (AuthService.currentPositionList.filter(item => item.childCount > 0).length > 0) {
      editUI.TargetSetting = this.targetSetting;
      editUI.ShowDialog(this.currentFunctionalObjective);
    }
    else
      MessageController.ShowMessage(MessageType.EditPermissionDenied);

  }

  public onDelete(deleteUI: FunctionalObjectiveDeleteUI) {
    if (FunctionalObjective.NotConfirm(this.currentFunctionalObjective))
      return;
    if (AuthService.currentPositionList.filter(item => item.childCount > 0).length > 0)
      deleteUI.ShowDialog(this.currentFunctionalObjective);
    else
      MessageController.ShowMessage(MessageType.DeletePermissionDenied);

  }

  public onEditModal_Closed(functionalObjective: FunctionalObjective) {
    this.onReload();
  }

  public onDeleteModal_Closed(result: boolean) {
    this.onReload();
  }
}