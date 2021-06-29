import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { DevelopmentPlanPriorityService } from './developmentPlanPriority.service';
import { DevelopmentPlanPriorityServiceCollection } from './developmentPlanPriority.service.collection';

import { DevelopmentPlanPriorityIndexUI } from './index/developmentPlanPriority.index';
import { DevelopmentPlanPriority_ModuleFunc } from './developmentPlanPriority.module.func';
import { DevelopmentPlanPriority_ModuleMaster } from './developmentPlanPriority.module.master';


import { IndividualDevelopmentPlan_ModuleFunc } from '../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan.module.func';
import { IndividualDevelopmentPlan_ModuleMaster } from '../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan.module.master';

@NgModule({
  declarations: [
    DevelopmentPlanPriorityIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    DevelopmentPlanPriority_ModuleMaster,
		IndividualDevelopmentPlan_ModuleMaster,
  ],
  exports: [
    DevelopmentPlanPriorityIndexUI,
		DevelopmentPlanPriority_ModuleMaster,
  ],
  providers: [
    // DevelopmentPlanPriorityService,
    // DevelopmentPlanPriorityServiceCollection
  ]
})
export class DevelopmentPlanPriorityModule {}