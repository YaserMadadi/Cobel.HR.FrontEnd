import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { DevelopmentPlanCompetencyService } from './developmentPlanCompetency.service';
import { DevelopmentPlanCompetencyServiceCollection } from './developmentPlanCompetency.service.collection';
import { DevelopmentPlanCompetencyMasterUI } from './master/developmentPlanCompetency.master';
import { DevelopmentPlanCompetencyEditUI } from './edit/developmentPlanCompetency.edit';
import { DevelopmentPlanCompetencyDeleteUI } from './delete/developmentPlanCompetency.delete';
import { DevelopmentPlanCompetencySeekUI } from './seek/developmentPlanCompetency.seek';

import { IndividualDevelopmentPlan_ModuleFunc } from '../IndividualDevelopmentPlan/individualDevelopmentPlan.module.func';
import { CompetencyItem_ModuleFunc } from '../CompetencyItem/competencyItem.module.func';

@NgModule({
    declarations: [
        DevelopmentPlanCompetencyEditUI,
		DevelopmentPlanCompetencyDeleteUI,
		DevelopmentPlanCompetencySeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        IndividualDevelopmentPlan_ModuleFunc,
		CompetencyItem_ModuleFunc
    ],
    exports: [
        DevelopmentPlanCompetencyEditUI,
		DevelopmentPlanCompetencyDeleteUI,
		DevelopmentPlanCompetencySeekUI
    ]
})

export class DevelopmentPlanCompetency_ModuleFunc { }