import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { ApproverType } from '../approverType';
import { ApproverTypeService } from '../approverType.service';
import { ApproverTypeDeleteUI } from '../delete/approverType.delete';
import { ApproverTypeEditUI } from '../edit/approverType.edit';
import { AppraisalApproverConfigService } from '../../../PMS/AppraisalApproverConfig/appraisalApproverConfig.service';



@Component({
  selector: 'base-pms-approverType-master',
  templateUrl: './approverType.master.html',
  styleUrls: ['./approverType.master.css'],
  providers: [
    ApproverTypeService,
    AppraisalApproverConfigService,
  ]
})
export class ApproverTypeMasterUI extends MasterModal<ApproverType> {

  constructor(private approverTypeService: ApproverTypeService) {
    super(approverTypeService);
  }
}