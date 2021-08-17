import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { ApproverType } from '../approverType';
import { ApproverTypeService } from '../approverType.service';
import { ApproverTypeMasterUI } from '../master/approverType.master';
import { ApproverTypeEditUI } from '../edit/approverType.edit';
import { ApproverTypeDeleteUI } from '../delete/approverType.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { AppraisalApproverConfigEditUI } from '../../../PMS/AppraisalApproverConfig/edit/appraisalApproverConfig.edit';
import { AppraisalApproverConfig } from '../../../PMS/AppraisalApproverConfig/appraisalApproverConfig';



@Component({
  selector: 'base.pms-approverType-index',
  templateUrl: './approverType.index.html',
  styleUrls: ['./approverType.index.css']
})
export class ApproverTypeIndexUI extends IndexView<ApproverType> implements AfterViewInit, IIndexView<ApproverType> {

  constructor(private approverTypeService: ApproverTypeService) {
    super(approverTypeService);
    this.filterInstance = ApproverType.SeekInstance();
    this.currentInstance = new ApproverType();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region AppraisalApproverConfig

  public appraisalApproverConfig_Clicked(appraisalApproverConfigEditUI: AppraisalApproverConfigEditUI) {
    appraisalApproverConfigEditUI.ApproverType = this.currentInstance;
    appraisalApproverConfigEditUI.ShowDialog(new AppraisalApproverConfig());
  }
                    
  public appraisalApproverConfigEditUI_Closed(appraisalApproverConfig: AppraisalApproverConfig) {
    if (!appraisalApproverConfig)
      return;
    this.onRefresh();
  }
  
  //#endregion AppraisalApproverConfig


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(approverTypeEditUI: ApproverTypeEditUI){
    approverTypeEditUI.ShowDialog(new ApproverType());
  }

  resetFilter() {
    this.filterInstance = ApproverType.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(approverType: ApproverType) {
    this.onRefresh();
    this.currentInstance = new ApproverType();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}