import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { AppraisalApproverConfigService } from './appraisalApproverConfig.service';
import { AppraisalApproverConfigServiceCollection } from './appraisalApproverConfig.service.collection';
import { AppraisalApproverConfigMasterUI } from './master/appraisalApproverConfig.master';
import { AppraisalApproverConfigEditUI } from './edit/appraisalApproverConfig.edit';
import { AppraisalApproverConfigDeleteUI } from './delete/appraisalApproverConfig.delete';
import { AppraisalApproverConfigSeekUI } from './seek/appraisalApproverConfig.seek';

import { PositionCategory_ModuleFunc } from '../../Base.HR/PositionCategory/positionCategory.module.func';
import { ApproverType_ModuleFunc } from '../../Base.PMS/ApproverType/approverType.module.func';

@NgModule({
    declarations: [
        AppraisalApproverConfigEditUI,
		AppraisalApproverConfigDeleteUI,
		AppraisalApproverConfigSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        PositionCategory_ModuleFunc,
		ApproverType_ModuleFunc
    ],
    exports: [
        AppraisalApproverConfigEditUI,
		AppraisalApproverConfigDeleteUI,
		AppraisalApproverConfigSeekUI
    ],
    providers: [
       //AppraisalApproverConfigService,
       // AppraisalApproverConfigServiceCollection,
    ]
})

export class AppraisalApproverConfig_ModuleFunc { }