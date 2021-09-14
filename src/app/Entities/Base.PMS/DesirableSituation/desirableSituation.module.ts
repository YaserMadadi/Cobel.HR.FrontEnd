import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { DesirableSituationService } from './desirableSituation.service';
import { DesirableSituationServiceCollection } from './desirableSituation.service.collection';

import { DesirableSituationIndexUI } from './index/desirableSituation.index';
import { DesirableSituation_ModuleFunc } from './desirableSituation.module.func';
import { DesirableSituation_ModuleMaster } from './desirableSituation.module.master';


import { IndividualDevelopmentPlan_ModuleFunc } from '../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan.module.func';
import { IndividualDevelopmentPlan_ModuleMaster } from '../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan.module.master';

@NgModule({
  declarations: [
    DesirableSituationIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    DesirableSituation_ModuleMaster,
		IndividualDevelopmentPlan_ModuleMaster,
  ],
  exports: [
    DesirableSituationIndexUI,
		DesirableSituation_ModuleMaster,
   ]
})
export class DesirableSituationModule {}