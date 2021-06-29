import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { OperationalAppraiseService } from './operationalAppraise.service';
import { OperationalAppraiseServiceCollection } from './operationalAppraise.service.collection';
import { OperationalAppraiseMasterUI } from './master/operationalAppraise.master';
import { OperationalAppraise_ModuleDetail } from './operationalAppraise.module.detail';

@NgModule({
    declarations: [
        OperationalAppraiseMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        OperationalAppraise_ModuleDetail
    ],
    exports: [
        OperationalAppraiseMasterUI
    ],
    providers: [
        //OperationalAppraiseService,
       // OperationalAppraiseServiceCollection   
    ]
})

export class OperationalAppraise_ModuleMaster { }