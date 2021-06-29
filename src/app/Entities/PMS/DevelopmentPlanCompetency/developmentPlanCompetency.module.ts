import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { DevelopmentPlanCompetencyService } from './developmentPlanCompetency.service';
import { DevelopmentPlanCompetencyServiceCollection } from './developmentPlanCompetency.service.collection';

import { DevelopmentPlanCompetencyIndexUI } from './index/developmentPlanCompetency.index';
import { DevelopmentPlanCompetency_ModuleFunc } from './developmentPlanCompetency.module.func';
import { DevelopmentPlanCompetency_ModuleMaster } from './developmentPlanCompetency.module.master';



@NgModule({
  declarations: [
    DevelopmentPlanCompetencyIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    DevelopmentPlanCompetency_ModuleMaster,
  ],
  exports: [
    DevelopmentPlanCompetencyIndexUI,
		DevelopmentPlanCompetency_ModuleMaster,
  ],
  providers: [
    // DevelopmentPlanCompetencyService,
    // DevelopmentPlanCompetencyServiceCollection
  ]
})
export class DevelopmentPlanCompetencyModule {}