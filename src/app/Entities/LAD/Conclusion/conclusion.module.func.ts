import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { ConclusionService } from './conclusion.service';
import { ConclusionServiceCollection } from './conclusion.service.collection';
import { ConclusionMasterUI } from './master/conclusion.master';
import { ConclusionEditUI } from './edit/conclusion.edit';
import { ConclusionDeleteUI } from './delete/conclusion.delete';
import { ConclusionSeekUI } from './seek/conclusion.seek';

import { Assessment_ModuleFunc } from '../Assessment/assessment.module.func';
import { ConclusionType_ModuleFunc } from '../ConclusionType/conclusionType.module.func';

@NgModule({
    declarations: [
        ConclusionEditUI,
		ConclusionDeleteUI,
		ConclusionSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Assessment_ModuleFunc,
		ConclusionType_ModuleFunc
    ],
    exports: [
        ConclusionEditUI,
		ConclusionDeleteUI,
		ConclusionSeekUI
    ]
})

export class Conclusion_ModuleFunc { }