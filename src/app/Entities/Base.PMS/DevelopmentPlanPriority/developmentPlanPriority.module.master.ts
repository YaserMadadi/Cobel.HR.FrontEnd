import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { DevelopmentPlanPriorityService } from './developmentPlanPriority.service';
import { DevelopmentPlanPriorityServiceCollection } from './developmentPlanPriority.service.collection';
import { DevelopmentPlanPriorityMasterUI } from './master/developmentPlanPriority.master';
import { DevelopmentPlanPriority_ModuleDetail } from './developmentPlanPriority.module.detail';

@NgModule({
    declarations: [
        DevelopmentPlanPriorityMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        DevelopmentPlanPriority_ModuleDetail
    ],
    exports: [
        DevelopmentPlanPriorityMasterUI
    ],
    providers: [
        //DevelopmentPlanPriorityService,
       // DevelopmentPlanPriorityServiceCollection   
    ]
})

export class DevelopmentPlanPriority_ModuleMaster { }