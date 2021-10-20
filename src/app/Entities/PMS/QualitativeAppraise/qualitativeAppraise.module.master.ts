import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { QualitativeAppraiseService } from './qualitativeAppraise.service';
import { QualitativeAppraiseServiceCollection } from './qualitativeAppraise.service.collection';
import { QualitativeAppraiseMasterUI } from './master/qualitativeAppraise.master';
import { QualitativeAppraise_ModuleDetail } from './qualitativeAppraise.module.detail';

@NgModule({
    declarations: [
        QualitativeAppraiseMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        QualitativeAppraise_ModuleDetail
    ],
    exports: [
        QualitativeAppraiseMasterUI
    ]
})

export class QualitativeAppraise_ModuleMaster { }