import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { QuantitativeAppraiseService } from './quantitativeAppraise.service';
import { QuantitativeAppraiseServiceCollection } from './quantitativeAppraise.service.collection';
import { QuantitativeAppraiseMasterUI } from './master/quantitativeAppraise.master';
import { QuantitativeAppraise_ModuleDetail } from './quantitativeAppraise.module.detail';

@NgModule({
    declarations: [
        QuantitativeAppraiseMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        QuantitativeAppraise_ModuleDetail
    ],
    exports: [
        QuantitativeAppraiseMasterUI
    ]
})

export class QuantitativeAppraise_ModuleMaster { }