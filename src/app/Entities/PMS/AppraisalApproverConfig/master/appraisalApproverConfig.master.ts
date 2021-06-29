import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { AppraisalApproverConfig } from '../appraisalApproverConfig';
import { AppraisalApproverConfigService } from '../appraisalApproverConfig.service';
import { AppraisalApproverConfigDeleteUI } from '../delete/appraisalApproverConfig.delete';
import { AppraisalApproverConfigEditUI } from '../edit/appraisalApproverConfig.edit';



@Component({
  selector: 'pms-appraisalApproverConfig-master',
  templateUrl: './appraisalApproverConfig.master.html',
  styleUrls: ['./appraisalApproverConfig.master.css'],
  providers: [
    AppraisalApproverConfigService,
    
  ]
})
export class AppraisalApproverConfigMasterUI extends MasterModal<AppraisalApproverConfig> {

  constructor(private appraisalApproverConfigService: AppraisalApproverConfigService) {
    super(appraisalApproverConfigService);
  }
}