import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CompetencyItemService } from './competencyItem.service';
import { CompetencyItemServiceCollection } from './competencyItem.service.collection';


import { CompetencyItem_AssessmentScore_DetailUI } from './detail/competencyItem-assessmentScore.detail';
import { AssessmentScore_ModuleMaster } from '../../LAD/AssessmentScore/assessmentScore.module.master';
import { CompetencyItem_BehavioralObjective_DetailUI } from './detail/competencyItem-behavioralObjective.detail';
import { BehavioralObjective_ModuleMaster } from '../BehavioralObjective/behavioralObjective.module.master';
import { CompetencyItem_CompetencyItemKPI_DetailUI } from './detail/competencyItem-competencyItemKPI.detail';
import { CompetencyItemKPI_ModuleMaster } from '../CompetencyItemKPI/competencyItemKPI.module.master';
import { CompetencyItem_DevelopmentPlanCompetency_DetailUI } from './detail/competencyItem-developmentPlanCompetency.detail';
import { DevelopmentPlanCompetency_ModuleMaster } from '../DevelopmentPlanCompetency/developmentPlanCompetency.module.master';

@NgModule({
  declarations: [
    CompetencyItem_AssessmentScore_DetailUI,
		CompetencyItem_BehavioralObjective_DetailUI,
		CompetencyItem_CompetencyItemKPI_DetailUI,
		CompetencyItem_DevelopmentPlanCompetency_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		AssessmentScore_ModuleMaster,
		BehavioralObjective_ModuleMaster,
		CompetencyItemKPI_ModuleMaster,
		DevelopmentPlanCompetency_ModuleMaster,
  ],
  exports: [
    CompetencyItem_AssessmentScore_DetailUI,
		CompetencyItem_BehavioralObjective_DetailUI,
		CompetencyItem_CompetencyItemKPI_DetailUI,
		CompetencyItem_DevelopmentPlanCompetency_DetailUI
  ],
  
})
export class CompetencyItem_ModuleDetail { }