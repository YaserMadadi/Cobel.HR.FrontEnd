import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { AppraisalApproverConfigService } from './appraisalApproverConfig.service';
import { AppraisalApproverConfigServiceCollection } from './appraisalApproverConfig.service.collection';
import { AppraisalApproverConfigMasterUI } from './master/appraisalApproverConfig.master';
import { AppraisalApproverConfig_ModuleDetail } from './appraisalApproverConfig.module.detail';

@NgModule({
    declarations: [
        AppraisalApproverConfigMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        AppraisalApproverConfig_ModuleDetail
    ],
    exports: [
        AppraisalApproverConfigMasterUI
    ]
})

export class AppraisalApproverConfig_ModuleMaster { }