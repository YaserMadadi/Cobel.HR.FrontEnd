import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { BehavioralAppraiseService } from './behavioralAppraise.service';
import { BehavioralAppraiseServiceCollection } from './behavioralAppraise.service.collection';
import { BehavioralAppraiseMasterUI } from './master/behavioralAppraise.master';
import { BehavioralAppraise_ModuleDetail } from './behavioralAppraise.module.detail';

@NgModule({
    declarations: [
        BehavioralAppraiseMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        BehavioralAppraise_ModuleDetail
    ],
    exports: [
        BehavioralAppraiseMasterUI
    ]
})

export class BehavioralAppraise_ModuleMaster { }