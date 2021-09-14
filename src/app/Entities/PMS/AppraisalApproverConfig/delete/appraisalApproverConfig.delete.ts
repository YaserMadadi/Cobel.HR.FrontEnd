import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { AppraisalApproverConfig } from '../appraisalApproverConfig';
import { AppraisalApproverConfigService } from '../appraisalApproverConfig.service';


@Component({
  selector: 'pms-appraisalApproverConfig-delete',
  templateUrl: './appraisalApproverConfig.delete.html',
  styleUrls: ['./appraisalApproverConfig.delete.css'],
  
})
export class AppraisalApproverConfigDeleteUI extends DeleteModal<AppraisalApproverConfig> {

    constructor(private appraisalApproverConfigService: AppraisalApproverConfigService){
        super(appraisalApproverConfigService);
    }

}