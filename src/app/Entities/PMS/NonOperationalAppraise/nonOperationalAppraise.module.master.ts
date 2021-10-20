import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { NonOperationalAppraiseService } from './nonOperationalAppraise.service';
import { NonOperationalAppraiseServiceCollection } from './nonOperationalAppraise.service.collection';
import { NonOperationalAppraiseMasterUI } from './master/nonOperationalAppraise.master';
import { NonOperationalAppraise_ModuleDetail } from './nonOperationalAppraise.module.detail';

@NgModule({
    declarations: [
        NonOperationalAppraiseMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        NonOperationalAppraise_ModuleDetail
    ],
    exports: [
        NonOperationalAppraiseMasterUI
    ]
})

export class NonOperationalAppraise_ModuleMaster { }