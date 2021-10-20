import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { ApproverType } from '../approverType';
import { ApproverTypeService } from '../approverType.service';

import { AppraisalApproverConfig } from '../../../PMS/AppraisalApproverConfig/appraisalApproverConfig';
import { AppraisalApproverConfigMasterUI } from '../../../PMS/AppraisalApproverConfig/master/appraisalApproverConfig.master';
import { AppraisalApproverConfigEditUI } from '../../../PMS/AppraisalApproverConfig/edit/appraisalApproverConfig.edit';
import { AppraisalApproverConfigDeleteUI } from '../../../PMS/AppraisalApproverConfig/delete/appraisalApproverConfig.delete';



@Component({
  selector: 'approverType-appraisalApproverConfig-detail',
  templateUrl: './approverType-appraisalApproverConfig.detail.html',
  styleUrls: ['./approverType-appraisalApproverConfig.detail.css']
})
export class ApproverType_AppraisalApproverConfig_DetailUI extends DetailView<ApproverType> {

  constructor(private approverTypeService: ApproverTypeService) {
    super(approverTypeService);
  }

  public AppraisalApproverConfigList : AppraisalApproverConfig[] = [];
  
  public currentAppraisalApproverConfig : AppraisalApproverConfig = new AppraisalApproverConfig();

  private approverType: ApproverType = new ApproverType();

  @Input()
  public set ApproverType(value: ApproverType) {
    this.approverType = value;
    this.onReload();
  }

  public get ApproverType(): ApproverType { return this.approverType }

  public onReload(){
    if (ApproverType.NotConfirm(this.approverType))
      return;
    this.approverTypeService
      .ServiceCollection
      .CollectionOfAppraisalApproverConfig(this.approverType)
      .then(appraisalApproverConfigList => {
        this.AppraisalApproverConfigList = appraisalApproverConfigList;
        this.currentAppraisalApproverConfig = new AppraisalApproverConfig();
      });
  }

  public onSelect(i: number) {
    this.currentAppraisalApproverConfig = this.AppraisalApproverConfigList[i];
    if (AppraisalApproverConfig.NotConfirm(this.currentAppraisalApproverConfig))
      this.currentAppraisalApproverConfig = new AppraisalApproverConfig();
  }

  public onDblClicked(masterUI: AppraisalApproverConfigMasterUI) {
    if (AppraisalApproverConfig.NotConfirm(this.currentAppraisalApproverConfig))
      return;
    masterUI.ShowDialog(this.currentAppraisalApproverConfig);
  }

  public onAdd(editUI: AppraisalApproverConfigEditUI) {
    editUI.ApproverType = this.approverType;
    editUI.ShowDialog(new AppraisalApproverConfig());
  }

  public onEdit(editUI: AppraisalApproverConfigEditUI) {
    if (AppraisalApproverConfig.NotConfirm(this.currentAppraisalApproverConfig))
      return;
    editUI.ShowDialog(this.currentAppraisalApproverConfig);
  }

  public onDelete(deleteUI: AppraisalApproverConfigDeleteUI) {
    if (AppraisalApproverConfig.NotConfirm(this.currentAppraisalApproverConfig))
      return;
    deleteUI.ShowDialog(this.currentAppraisalApproverConfig);
  }

  public onEditModal_Closed(appraisalApproverConfig: AppraisalApproverConfig) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}