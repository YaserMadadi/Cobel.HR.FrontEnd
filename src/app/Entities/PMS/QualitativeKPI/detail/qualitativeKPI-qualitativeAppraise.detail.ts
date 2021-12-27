import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { QualitativeKPI } from '../qualitativeKPI';
import { QualitativeKPIService } from '../qualitativeKPI.service';

import { QualitativeAppraise } from '../../QualitativeAppraise/qualitativeAppraise';
import { QualitativeAppraiseMasterUI } from '../../QualitativeAppraise/master/qualitativeAppraise.master';
import { QualitativeAppraiseEditUI } from '../../QualitativeAppraise/edit/qualitativeAppraise.edit';
import { QualitativeAppraiseDeleteUI } from '../../QualitativeAppraise/delete/qualitativeAppraise.delete';
import { AuthService } from '../../../../../xcore/security/auth_service';
import { MessageController, toastType } from '../../../../../xcore/tools/controller.message';
import { PositionController } from '../../../../../xcore/tools/controller.positions';
import { MessageType } from '../../../../../xcore/tools/Enum';



@Component({
  selector: 'qualitativeKPI-qualitativeAppraise-detail',
  templateUrl: './qualitativeKPI-qualitativeAppraise.detail.html',
  styleUrls: ['./qualitativeKPI-qualitativeAppraise.detail.css'],

})

@Injectable()
export class QualitativeKPI_QualitativeAppraise_DetailUI extends DetailView<QualitativeKPI> {

  constructor(private qualitativeKPIService: QualitativeKPIService) {
    super(qualitativeKPIService);
  }

  public QualitativeAppraiseList: QualitativeAppraise[] = [];

  public currentQualitativeAppraise: QualitativeAppraise = new QualitativeAppraise();

  private qualitativeKPI: QualitativeKPI = new QualitativeKPI();

  @Input()
  public set QualitativeKPI(value: QualitativeKPI) {
    this.qualitativeKPI = value;
    this.onReload();
  }

  public get QualitativeKPI(): QualitativeKPI { return this.qualitativeKPI }

  public onReload() {
    if (QualitativeKPI.NotConfirm(this.qualitativeKPI))
      return;
    this.qualitativeKPIService
      .ServiceCollection
      .CollectionOfQualitativeAppraise(this.qualitativeKPI)
      .then(qualitativeAppraiseList => {
        this.QualitativeAppraiseList = qualitativeAppraiseList;
        this.currentQualitativeAppraise = new QualitativeAppraise();
      });
  }

  public onSelect(i: number) {
    this.currentQualitativeAppraise = this.QualitativeAppraiseList[i];
    if (QualitativeAppraise.NotConfirm(this.currentQualitativeAppraise))
      this.currentQualitativeAppraise = new QualitativeAppraise();
  }

  public onDblClicked(masterUI: QualitativeAppraiseMasterUI) {
    if (!this.checkTargetSetting())
      return;
    if (QualitativeAppraise.NotConfirm(this.currentQualitativeAppraise))
      return;
    masterUI.ShowDialog(this.currentQualitativeAppraise);
  }

  private checkTargetSetting(): boolean {
    if (this.QualitativeKPI.qualitativeObjective.targetSetting.employee.id == AuthService.currentEmployee.id &&
      this.QualitativeKPI.qualitativeObjective.targetSetting.targetSettingMode.id != 3) { // targetSettingMode.id = 3 : Self Appraising Mode
      MessageController.ShowMessage(MessageType.NotSelfAppraisingMode);
      return false;
    }

    if (this.QualitativeKPI.qualitativeObjective.targetSetting.employee.id != AuthService.currentEmployee.id &&
      this.QualitativeKPI.qualitativeObjective.targetSetting.targetSettingMode.id != 4) { // targetSettingMode.id = 4 : Manager Appraising Mode
      MessageController.ShowMessage(MessageType.NotManagerAppraisingMode);
      return false;
    }
    if (this.QualitativeKPI.qualitativeObjective.targetSetting.isLocked ||
      this.QualitativeKPI.qualitativeObjective.targetSetting.targetSettingMode.id == 5) {
      MessageController.ShowMessage(MessageType.RecordIsLocked);
      return false;
    }
    if (this.currentQualitativeAppraise.appraiser.id != AuthService.currentEmployee.id &&
      AuthService.currentPositionList.filter(p => p.id == PositionController.HR_PMS_Position_Id).length == 0) {
      MessageController.ShowMessage('You are not allowed to change this record of Appraisal!', toastType.error);
      return;
    }
    return true;
  }

  public onAdd(editUI: QualitativeAppraiseEditUI) {
    if (!this.checkTargetSetting())
      return;
    editUI.QualitativeKPI = this.qualitativeKPI;
    editUI.SetDefault();
    editUI.ShowDialog(new QualitativeAppraise());
  }

  public onEdit(editUI: QualitativeAppraiseEditUI) {
    if (!this.checkTargetSetting())
      return;
    if (QualitativeAppraise.NotConfirm(this.currentQualitativeAppraise))
      return;
    editUI.QualitativeKPI = this.QualitativeKPI;
    editUI.SetDefault();
    editUI.ShowDialog(this.currentQualitativeAppraise);
  }

  public onDelete(deleteUI: QualitativeAppraiseDeleteUI) {
    if (!this.checkTargetSetting())
      return;
    if (QualitativeAppraise.NotConfirm(this.currentQualitativeAppraise))
      return;
    deleteUI.ShowDialog(this.currentQualitativeAppraise);
  }

  public onEditModal_Closed(qualitativeAppraise: QualitativeAppraise) {
    this.onReload();
  }

  public onDeleteModal_Closed(result: boolean) {
    this.onReload();
  }
}