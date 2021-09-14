import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { AppraiseTimeService } from './appraiseTime.service';
import { AppraiseTimeServiceCollection } from './appraiseTime.service.collection';
import { AppraiseTimeMasterUI } from './master/appraiseTime.master';
import { AppraiseTime_ModuleDetail } from './appraiseTime.module.detail';

@NgModule({
    declarations: [
        AppraiseTimeMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        AppraiseTime_ModuleDetail
    ],
    exports: [
        AppraiseTimeMasterUI
    ]
})

export class AppraiseTime_ModuleMaster { }