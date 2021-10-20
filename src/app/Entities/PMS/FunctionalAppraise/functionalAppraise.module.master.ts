import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { FunctionalAppraiseService } from './functionalAppraise.service';
import { FunctionalAppraiseServiceCollection } from './functionalAppraise.service.collection';
import { FunctionalAppraiseMasterUI } from './master/functionalAppraise.master';
import { FunctionalAppraise_ModuleDetail } from './functionalAppraise.module.detail';

@NgModule({
    declarations: [
        FunctionalAppraiseMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        FunctionalAppraise_ModuleDetail
    ],
    exports: [
        FunctionalAppraiseMasterUI
    ]
})

export class FunctionalAppraise_ModuleMaster { }