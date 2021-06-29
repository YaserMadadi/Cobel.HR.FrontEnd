import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { AppraiseResultService } from './appraiseResult.service';
import { AppraiseResultServiceCollection } from './appraiseResult.service.collection';
import { AppraiseResultMasterUI } from './master/appraiseResult.master';
import { AppraiseResult_ModuleDetail } from './appraiseResult.module.detail';

@NgModule({
    declarations: [
        AppraiseResultMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        AppraiseResult_ModuleDetail
    ],
    exports: [
        AppraiseResultMasterUI
    ],
    providers: [
        //AppraiseResultService,
       // AppraiseResultServiceCollection   
    ]
})

export class AppraiseResult_ModuleMaster { }