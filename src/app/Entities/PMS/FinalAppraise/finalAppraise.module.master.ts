import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { FinalAppraiseService } from './finalAppraise.service';
import { FinalAppraiseServiceCollection } from './finalAppraise.service.collection';
import { FinalAppraiseMasterUI } from './master/finalAppraise.master';
import { FinalAppraise_ModuleDetail } from './finalAppraise.module.detail';

@NgModule({
    declarations: [
        FinalAppraiseMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        FinalAppraise_ModuleDetail
    ],
    exports: [
        FinalAppraiseMasterUI
    ],
    providers: [
        //FinalAppraiseService,
       // FinalAppraiseServiceCollection   
    ]
})

export class FinalAppraise_ModuleMaster { }