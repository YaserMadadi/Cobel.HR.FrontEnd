import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { FinalApprovementService } from './finalApprovement.service';
import { FinalApprovementServiceCollection } from './finalApprovement.service.collection';
import { FinalApprovementMasterUI } from './master/finalApprovement.master';
import { FinalApprovement_ModuleDetail } from './finalApprovement.module.detail';

@NgModule({
    declarations: [
        FinalApprovementMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        FinalApprovement_ModuleDetail
    ],
    exports: [
        FinalApprovementMasterUI
    ]
})

export class FinalApprovement_ModuleMaster { }