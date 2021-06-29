import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { IndividualDevelopmentPlanService } from './individualDevelopmentPlan.service';
import { IndividualDevelopmentPlanServiceCollection } from './individualDevelopmentPlan.service.collection';
import { IndividualDevelopmentPlanMasterUI } from './master/individualDevelopmentPlan.master';
import { IndividualDevelopmentPlan_ModuleDetail } from './individualDevelopmentPlan.module.detail';

@NgModule({
    declarations: [
        IndividualDevelopmentPlanMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        IndividualDevelopmentPlan_ModuleDetail
    ],
    exports: [
        IndividualDevelopmentPlanMasterUI
    ],
    providers: [
        //IndividualDevelopmentPlanService,
       // IndividualDevelopmentPlanServiceCollection   
    ]
})

export class IndividualDevelopmentPlan_ModuleMaster { }