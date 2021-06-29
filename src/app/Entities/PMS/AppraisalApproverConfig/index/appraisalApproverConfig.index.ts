import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { AppraisalApproverConfig } from '../appraisalApproverConfig';
import { AppraisalApproverConfigService } from '../appraisalApproverConfig.service';
import { AppraisalApproverConfigMasterUI } from '../master/appraisalApproverConfig.master';
import { AppraisalApproverConfigEditUI } from '../edit/appraisalApproverConfig.edit';
import { AppraisalApproverConfigDeleteUI } from '../delete/appraisalApproverConfig.delete';

import { PositionCategory } from '../../../HR/PositionCategory/positionCategory';
import { ApproverType } from '../../../Base.PMS/ApproverType/approverType';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'pms-appraisalApproverConfig-index',
  templateUrl: './appraisalApproverConfig.index.html',
  styleUrls: ['./appraisalApproverConfig.index.css']
})
export class AppraisalApproverConfigIndexUI extends IndexView<AppraisalApproverConfig> implements AfterViewInit, IIndexView<AppraisalApproverConfig> {

  constructor(private appraisalApproverConfigService: AppraisalApproverConfigService) {
    super(appraisalApproverConfigService);
    this.filterInstance = AppraisalApproverConfig.SeekInstance();
    this.currentInstance = new AppraisalApproverConfig();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(appraisalApproverConfigEditUI: AppraisalApproverConfigEditUI){
    appraisalApproverConfigEditUI.ShowDialog(new AppraisalApproverConfig());
  }

  resetFilter() {
    this.filterInstance = AppraisalApproverConfig.SeekInstance();
    
    
  }

  public onEditModalClosed(appraisalApproverConfig: AppraisalApproverConfig) {
    this.onRefresh();
    this.currentInstance = new AppraisalApproverConfig();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}