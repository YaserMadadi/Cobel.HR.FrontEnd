import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { CurrentSituationService } from './currentSituation.service';
import { CurrentSituationServiceCollection } from './currentSituation.service.collection';

import { CurrentSituationIndexUI } from './index/currentSituation.index';
import { CurrentSituation_ModuleFunc } from './currentSituation.module.func';
import { CurrentSituation_ModuleMaster } from './currentSituation.module.master';


import { IndividualDevelopmentPlan_ModuleFunc } from '../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan.module.func';
import { IndividualDevelopmentPlan_ModuleMaster } from '../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan.module.master';

@NgModule({
  declarations: [
    CurrentSituationIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    CurrentSituation_ModuleMaster,
		IndividualDevelopmentPlan_ModuleMaster,
  ],
  exports: [
    CurrentSituationIndexUI,
		CurrentSituation_ModuleMaster,
  ],
  providers: [
    // CurrentSituationService,
    // CurrentSituationServiceCollection
  ]
})
export class CurrentSituationModule {}