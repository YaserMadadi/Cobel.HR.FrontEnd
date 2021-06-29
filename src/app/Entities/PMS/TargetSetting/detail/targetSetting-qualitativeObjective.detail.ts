import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { TargetSetting } from '../targetSetting';
import { TargetSettingService } from '../targetSetting.service';

import { QualitativeObjective } from '../../QualitativeObjective/qualitativeObjective';
import { QualitativeObjectiveMasterUI } from '../../QualitativeObjective/master/qualitativeObjective.master';
import { QualitativeObjectiveEditUI } from '../../QualitativeObjective/edit/qualitativeObjective.edit';
import { QualitativeObjectiveDeleteUI } from '../../QualitativeObjective/delete/qualitativeObjective.delete';
import { AuthService } from '../../../../../xcore/security/auth_service';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { MessageType } from '../../../../../xcore/tools/Enum';
import { BehavioralObjective } from '../../BehavioralObjective/behavioralObjective';



@Component({
  selector: 'targetSetting-qualitativeObjective-detail',
  templateUrl: './targetSetting-qualitativeObjective.detail.html',
  styleUrls: ['./targetSetting-qualitativeObjective.detail.css'],
  providers: [TargetSettingService]
})

@Injectable()
export class TargetSetting_QualitativeObjective_DetailUI extends DetailView<TargetSetting> {

  constructor(private targetSettingService: TargetSettingService) {
    super(targetSettingService);
  }

  public QualitativeObjectiveList: QualitativeObjective[] = [];

  public currentQualitativeObjective: QualitativeObjective = new QualitativeObjective();

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
      .CollectionOfQualitativeObjective(this.targetSetting)
      .then(qualitativeObjectiveList => {
        this.QualitativeObjectiveList = qualitativeObjectiveList;
        this.currentQualitativeObjective = new QualitativeObjective();
      });
  }

  public onSelect(i: number) {
    this.currentQualitativeObjective = this.QualitativeObjectiveList[i];
    if (QualitativeObjective.NotConfirm(this.currentQualitativeObjective))
      this.currentQualitativeObjective = new QualitativeObjective();
  }

  public onDblClicked(masterUI: QualitativeObjectiveMasterUI) {
    if (QualitativeObjective.NotConfirm(this.currentQualitativeObjective))
      return;
    masterUI.ShowDialog(this.currentQualitativeObjective);
  }

  public onAdd(editUI: QualitativeObjectiveEditUI) {
    if (AuthService.currentPositionList.filter(item => item.childCount > 0).length > 0) {
      editUI.TargetSetting = this.targetSetting;
      editUI.ShowDialog(new QualitativeObjective());
    }
    else
      MessageController.ShowMessage(MessageType.AddPermissionDenied);
  }

  public onEdit(editUI: QualitativeObjectiveEditUI) {
    if (QualitativeObjective.NotConfirm(this.currentQualitativeObjective))
      return;
    if (AuthService.currentPositionList.filter(item => item.childCount > 0).length > 0) {
      editUI.TargetSetting = this.targetSetting;
      editUI.ShowDialog(this.currentQualitativeObjective);
    }
    else
      MessageController.ShowMessage(MessageType.AddPermissionDenied);
  }

  public onDelete(deleteUI: QualitativeObjectiveDeleteUI) {
    if (QualitativeObjective.NotConfirm(this.currentQualitativeObjective))
      return;
    deleteUI.ShowDialog(this.currentQualitativeObjective);
  }

  public onEditModal_Closed(qualitativeObjective: QualitativeObjective) {
    this.onReload();
  }

  public onDeleteModal_Closed(result: boolean) {
    this.onReload();
  }
}