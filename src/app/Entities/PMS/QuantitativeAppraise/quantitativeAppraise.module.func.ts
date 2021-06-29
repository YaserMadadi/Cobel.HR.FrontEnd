import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { QuantitativeAppraiseService } from './quantitativeAppraise.service';
import { QuantitativeAppraiseServiceCollection } from './quantitativeAppraise.service.collection';
import { QuantitativeAppraiseMasterUI } from './master/quantitativeAppraise.master';
import { QuantitativeAppraiseEditUI } from './edit/quantitativeAppraise.edit';
import { QuantitativeAppraiseDeleteUI } from './delete/quantitativeAppraise.delete';
import { QuantitativeAppraiseSeekUI } from './seek/quantitativeAppraise.seek';

import { TargetSetting_ModuleFunc } from '../TargetSetting/targetSetting.module.func';

@NgModule({
    declarations: [
        QuantitativeAppraiseEditUI,
		QuantitativeAppraiseDeleteUI,
		QuantitativeAppraiseSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        TargetSetting_ModuleFunc
    ],
    exports: [
        QuantitativeAppraiseEditUI,
		QuantitativeAppraiseDeleteUI,
		QuantitativeAppraiseSeekUI
    ],
    providers: [
       //QuantitativeAppraiseService,
       // QuantitativeAppraiseServiceCollection,
    ]
})

export class QuantitativeAppraise_ModuleFunc { }