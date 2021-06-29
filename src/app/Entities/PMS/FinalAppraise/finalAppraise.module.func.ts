import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { FinalAppraiseService } from './finalAppraise.service';
import { FinalAppraiseServiceCollection } from './finalAppraise.service.collection';
import { FinalAppraiseMasterUI } from './master/finalAppraise.master';
import { FinalAppraiseEditUI } from './edit/finalAppraise.edit';
import { FinalAppraiseDeleteUI } from './delete/finalAppraise.delete';
import { FinalAppraiseSeekUI } from './seek/finalAppraise.seek';

import { TargetSetting_ModuleFunc } from '../TargetSetting/targetSetting.module.func';

@NgModule({
    declarations: [
        FinalAppraiseEditUI,
		FinalAppraiseDeleteUI,
		FinalAppraiseSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        TargetSetting_ModuleFunc
    ],
    exports: [
        FinalAppraiseEditUI,
		FinalAppraiseDeleteUI,
		FinalAppraiseSeekUI
    ],
    providers: [
       //FinalAppraiseService,
       // FinalAppraiseServiceCollection,
    ]
})

export class FinalAppraise_ModuleFunc { }