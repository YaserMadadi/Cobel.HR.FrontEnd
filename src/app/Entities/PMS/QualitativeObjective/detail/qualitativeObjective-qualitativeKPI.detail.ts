import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { QualitativeObjective } from '../qualitativeObjective';
import { QualitativeObjectiveService } from '../qualitativeObjective.service';

import { QualitativeKPI } from '../../QualitativeKPI/qualitativeKPI';
import { QualitativeKPIMasterUI } from '../../QualitativeKPI/master/qualitativeKPI.master';
import { QualitativeKPIEditUI } from '../../QualitativeKPI/edit/qualitativeKPI.edit';
import { QualitativeKPIDeleteUI } from '../../QualitativeKPI/delete/qualitativeKPI.delete';
import { AuthService } from '../../../../../xcore/security/auth_service';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { MessageType } from '../../../../../xcore/tools/Enum';
import { PositionController } from '../../../../../xcore/tools/controller.positions';



@Component({
  selector: 'qualitativeObjective-qualitativeKPI-detail',
  templateUrl: './qualitativeObjective-qualitativeKPI.detail.html',
  styleUrls: ['./qualitativeObjective-qualitativeKPI.detail.css'],

})

@Injectable()
export class QualitativeObjective_QualitativeKPI_DetailUI extends DetailView<QualitativeObjective> {

  constructor(private qualitativeObjectiveService: QualitativeObjectiveService) {
    super(qualitativeObjectiveService);
  }

  public QualitativeKPIList: QualitativeKPI[] = [];

  public currentQualitativeKPI: QualitativeKPI = new QualitativeKPI();

  private qualitativeObjective: QualitativeObjective = new QualitativeObjective();

  @Input()
  public set QualitativeObjective(value: QualitativeObjective) {
    this.qualitativeObjective = value;
    this.onReload();
  }

  public get QualitativeObjective(): QualitativeObjective { return this.qualitativeObjective }

  public onReload() {
    if (QualitativeObjective.NotConfirm(this.qualitativeObjective))
      return;
    this.qualitativeObjectiveService
      .ServiceCollection
      .CollectionOfQualitativeKPI(this.qualitativeObjective)
      .then(qualitativeKPIList => {
        this.QualitativeKPIList = qualitativeKPIList;
        this.currentQualitativeKPI = new QualitativeKPI();
      });
  }

  public onSelect(i: number) {
    this.currentQualitativeKPI = this.QualitativeKPIList[i];
    this.currentQualitativeKPI.qualitativeObjective = this.qualitativeObjective;
    if (QualitativeKPI.NotConfirm(this.currentQualitativeKPI))
      this.currentQualitativeKPI = new QualitativeKPI();
  }

  public onDblClicked(masterUI: QualitativeKPIMasterUI) {
    if (QualitativeKPI.NotConfirm(this.currentQualitativeKPI))
      return;
    this.currentQualitativeKPI.qualitativeObjective = this.qualitativeObjective;
    masterUI.ShowDialog(this.currentQualitativeKPI);
  }

  private async checkTargetSetting(): Promise<Boolean> {

    if (this.qualitativeObjective.targetSetting.isLocked) {
      MessageController.ShowMessage(MessageType.RecordIsLocked);
      return false;
    }

    // if (this.currentQualitativeKPI.qualitativeObjective.targetSetting.targetSettingMode.id != 2) {
    //   MessageController.ShowMessage(MessageType.NotTargetReviewingMode);
    //   return false;
    // }

    if (!PositionController.IsCurrentUser(this.qualitativeObjective.targetSetting.appraiser) &&
      !PositionController.IsPMSAdmin() &&
      !PositionController.IsAdmin()) {
      MessageController.ShowMessage(MessageType.YouAreNotAppraiser);
      return false;
    }

    return true;
  }

  public onAdd(editUI: QualitativeKPIEditUI) {
    if (!this.checkTargetSetting())
      return;
    editUI.QualitativeObjective = this.qualitativeObjective;
    editUI.ShowDialog(new QualitativeKPI());
  }

  public onEdit(editUI: QualitativeKPIEditUI) {
    if (!this.checkTargetSetting())
      return;
    if (QualitativeKPI.NotConfirm(this.currentQualitativeKPI))
      return;
    editUI.ShowDialog(this.currentQualitativeKPI);
  }

  public onDelete(deleteUI: QualitativeKPIDeleteUI) {
    if (!this.checkTargetSetting())
      return;
    if (QualitativeKPI.NotConfirm(this.currentQualitativeKPI))
      return;
    deleteUI.ShowDialog(this.currentQualitativeKPI);
  }

  public onEditModal_Closed(qualitativeKPI: QualitativeKPI) {
    this.onReload();
  }

  public onDeleteModal_Closed(result: boolean) {
    this.onReload();
  }
}