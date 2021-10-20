import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { IndividualDevelopmentPlanService } from './individualDevelopmentPlan.service';
import { IndividualDevelopmentPlanServiceCollection } from './individualDevelopmentPlan.service.collection';

import { IndividualDevelopmentPlanIndexUI } from './index/individualDevelopmentPlan.index';
import { IndividualDevelopmentPlan_ModuleFunc } from './individualDevelopmentPlan.module.func';
import { IndividualDevelopmentPlan_ModuleMaster } from './individualDevelopmentPlan.module.master';


import { DevelopmentPlanCompetency_ModuleFunc } from '../DevelopmentPlanCompetency/developmentPlanCompetency.module.func';
import { DevelopmentPlanCompetency_ModuleMaster } from '../DevelopmentPlanCompetency/developmentPlanCompetency.module.master';

@NgModule({
  declarations: [
    IndividualDevelopmentPlanIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    IndividualDevelopmentPlan_ModuleMaster,
		DevelopmentPlanCompetency_ModuleMaster,
  ],
  exports: [
    IndividualDevelopmentPlanIndexUI,
		IndividualDevelopmentPlan_ModuleMaster,
   ]
})
export class IndividualDevelopmentPlanModule {}