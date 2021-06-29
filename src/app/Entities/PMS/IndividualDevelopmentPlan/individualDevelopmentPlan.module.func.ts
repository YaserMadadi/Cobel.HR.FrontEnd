import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { IndividualDevelopmentPlanService } from './individualDevelopmentPlan.service';
import { IndividualDevelopmentPlanServiceCollection } from './individualDevelopmentPlan.service.collection';
import { IndividualDevelopmentPlanMasterUI } from './master/individualDevelopmentPlan.master';
import { IndividualDevelopmentPlanEditUI } from './edit/individualDevelopmentPlan.edit';
import { IndividualDevelopmentPlanDeleteUI } from './delete/individualDevelopmentPlan.delete';
import { IndividualDevelopmentPlanSeekUI } from './seek/individualDevelopmentPlan.seek';

import { Vision_ModuleFunc } from '../Vision/vision.module.func';
import { DevelopmentPlanPriority_ModuleFunc } from '../../Base.PMS/DevelopmentPlanPriority/developmentPlanPriority.module.func';
import { Subject_ModuleFunc } from '../../Base.PMS/Subject/subject.module.func';
import { CurrentSituation_ModuleFunc } from '../../Base.PMS/CurrentSituation/currentSituation.module.func';
import { DesirableSituation_ModuleFunc } from '../../Base.PMS/DesirableSituation/desirableSituation.module.func';

@NgModule({
    declarations: [
        IndividualDevelopmentPlanEditUI,
		IndividualDevelopmentPlanDeleteUI,
		IndividualDevelopmentPlanSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Vision_ModuleFunc,
		DevelopmentPlanPriority_ModuleFunc,
		Subject_ModuleFunc,
		CurrentSituation_ModuleFunc,
		DesirableSituation_ModuleFunc
    ],
    exports: [
        IndividualDevelopmentPlanEditUI,
		IndividualDevelopmentPlanDeleteUI,
		IndividualDevelopmentPlanSeekUI
    ],
    providers: [
       //IndividualDevelopmentPlanService,
       // IndividualDevelopmentPlanServiceCollection,
    ]
})

export class IndividualDevelopmentPlan_ModuleFunc { }