import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ConclusionService } from './conclusion.service';
import { ConclusionServiceCollection } from './conclusion.service.collection';
import { ConclusionMasterUI } from './master/conclusion.master';
import { Conclusion_ModuleDetail } from './conclusion.module.detail';

@NgModule({
    declarations: [
        ConclusionMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Conclusion_ModuleDetail
    ],
    exports: [
        ConclusionMasterUI
    ]
})

export class Conclusion_ModuleMaster { }