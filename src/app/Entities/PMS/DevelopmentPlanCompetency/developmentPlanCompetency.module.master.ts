import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { DevelopmentPlanCompetencyService } from './developmentPlanCompetency.service';
import { DevelopmentPlanCompetencyServiceCollection } from './developmentPlanCompetency.service.collection';
import { DevelopmentPlanCompetencyMasterUI } from './master/developmentPlanCompetency.master';
import { DevelopmentPlanCompetency_ModuleDetail } from './developmentPlanCompetency.module.detail';

@NgModule({
    declarations: [
        DevelopmentPlanCompetencyMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        DevelopmentPlanCompetency_ModuleDetail
    ],
    exports: [
        DevelopmentPlanCompetencyMasterUI
    ],
    providers: [
        //DevelopmentPlanCompetencyService,
       // DevelopmentPlanCompetencyServiceCollection   
    ]
})

export class DevelopmentPlanCompetency_ModuleMaster { }