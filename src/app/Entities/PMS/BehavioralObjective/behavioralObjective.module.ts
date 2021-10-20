import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { BehavioralObjectiveService } from './behavioralObjective.service';
import { BehavioralObjectiveServiceCollection } from './behavioralObjective.service.collection';

import { BehavioralObjectiveIndexUI } from './index/behavioralObjective.index';
import { BehavioralObjective_ModuleFunc } from './behavioralObjective.module.func';
import { BehavioralObjective_ModuleMaster } from './behavioralObjective.module.master';


import { BehavioralKPI_ModuleFunc } from '../BehavioralKPI/behavioralKPI.module.func';
import { BehavioralKPI_ModuleMaster } from '../BehavioralKPI/behavioralKPI.module.master';

@NgModule({
  declarations: [
    BehavioralObjectiveIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    BehavioralObjective_ModuleMaster,
		BehavioralKPI_ModuleMaster,
  ],
  exports: [
    BehavioralObjectiveIndexUI,
		BehavioralObjective_ModuleMaster,
   ]
})
export class BehavioralObjectiveModule {}