import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { CompetencyItemService } from './competencyItem.service';
import { CompetencyItemServiceCollection } from './competencyItem.service.collection';

import { CompetencyItemIndexUI } from './index/competencyItem.index';
import { CompetencyItem_ModuleFunc } from './competencyItem.module.func';
import { CompetencyItem_ModuleMaster } from './competencyItem.module.master';


import { AssessmentScore_ModuleFunc } from '../../LAD/AssessmentScore/assessmentScore.module.func';
import { AssessmentScore_ModuleMaster } from '../../LAD/AssessmentScore/assessmentScore.module.master';
import { BehavioralObjective_ModuleFunc } from '../BehavioralObjective/behavioralObjective.module.func';
import { BehavioralObjective_ModuleMaster } from '../BehavioralObjective/behavioralObjective.module.master';
import { CompetencyItemKPI_ModuleFunc } from '../CompetencyItemKPI/competencyItemKPI.module.func';
import { CompetencyItemKPI_ModuleMaster } from '../CompetencyItemKPI/competencyItemKPI.module.master';
import { DevelopmentPlanCompetency_ModuleFunc } from '../DevelopmentPlanCompetency/developmentPlanCompetency.module.func';
import { DevelopmentPlanCompetency_ModuleMaster } from '../DevelopmentPlanCompetency/developmentPlanCompetency.module.master';

@NgModule({
  declarations: [
    CompetencyItemIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    CompetencyItem_ModuleMaster,
		AssessmentScore_ModuleMaster,
		BehavioralObjective_ModuleMaster,
		CompetencyItemKPI_ModuleMaster,
		DevelopmentPlanCompetency_ModuleMaster,
  ],
  exports: [
    CompetencyItemIndexUI,
		CompetencyItem_ModuleMaster,
  ],
  providers: [
    // CompetencyItemService,
    // CompetencyItemServiceCollection
  ]
})
export class CompetencyItemModule {}