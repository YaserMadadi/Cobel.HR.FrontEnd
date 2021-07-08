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



@Component({
  selector: 'qualitativeKPI-qualitativeAppraise-detail',
  templateUrl: './qualitativeKPI-qualitativeAppraise.detail.html',
  styleUrls: ['./qualitativeKPI-qualitativeAppraise.detail.css'],
  providers: [QualitativeKPIService]
}) 

@Injectable()
export class QualitativeKPI_QualitativeAppraise_DetailUI extends DetailView<QualitativeKPI> {

  constructor(private qualitativeKPIService: QualitativeKPIService) {
    super(qualitativeKPIService);
  }

  public QualitativeAppraiseList : QualitativeAppraise[] = [];
  
  public currentQualitativeAppraise : QualitativeAppraise = new QualitativeAppraise();

  private qualitativeKPI: QualitativeKPI = new QualitativeKPI();

  @Input()
  public set QualitativeKPI(value: QualitativeKPI) {
    this.qualitativeKPI = value;
    this.onReload();
  }

  public get QualitativeKPI(): QualitativeKPI { return this.qualitativeKPI }

  public onReload(){
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
    if (QualitativeAppraise.NotConfirm(this.currentQualitativeAppraise))
      return;
    masterUI.ShowDialog(this.currentQualitativeAppraise);
  }

  

  public onAdd(editUI: QualitativeAppraiseEditUI) {
    editUI.QualitativeKPI = this.qualitativeKPI;
    editUI.ShowDialog(new QualitativeAppraise());
  }

  public onEdit(editUI: QualitativeAppraiseEditUI) {
    if (this.currentQualitativeAppraise.appraiser.id != AuthService.currentEmployee.id &&
      AuthService.currentPositionList.filter(p => p.id == PositionController.HR_PMS_Position_Id).length == 0) {
      MessageController.ShowMessage('You are not allowed to Edit this record of Appraisal!', toastType.error);
      return;
    }
    if (QualitativeAppraise.NotConfirm(this.currentQualitativeAppraise))
      return;
    editUI.ShowDialog(this.currentQualitativeAppraise);
  }

  public onDelete(deleteUI: QualitativeAppraiseDeleteUI) {
    if (this.currentQualitativeAppraise.appraiser.id != AuthService.currentEmployee.id &&
      AuthService.currentPositionList.filter(p => p.id == PositionController.HR_PMS_Position_Id).length == 0) {
      MessageController.ShowMessage('You are not allowed to Delete this record of Appraisal!', toastType.error);
      return;
    }
    if (QualitativeAppraise.NotConfirm(this.currentQualitativeAppraise))
      return;
    deleteUI.ShowDialog(this.currentQualitativeAppraise);
  }

  public onEditModal_Closed(qualitativeAppraise: QualitativeAppraise) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}