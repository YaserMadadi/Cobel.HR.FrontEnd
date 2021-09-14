import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { ExpectedLevelService } from './expectedLevel.service';
import { ExpectedLevelServiceCollection } from './expectedLevel.service.collection';

import { ExpectedLevelIndexUI } from './index/expectedLevel.index';
import { ExpectedLevel_ModuleFunc } from './expectedLevel.module.func';
import { ExpectedLevel_ModuleMaster } from './expectedLevel.module.master';


import { BehavioralObjective_ModuleFunc } from '../../PMS/BehavioralObjective/behavioralObjective.module.func';
import { BehavioralObjective_ModuleMaster } from '../../PMS/BehavioralObjective/behavioralObjective.module.master';

@NgModule({
  declarations: [
    ExpectedLevelIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    ExpectedLevel_ModuleMaster,
		BehavioralObjective_ModuleMaster,
  ],
  exports: [
    ExpectedLevelIndexUI,
		ExpectedLevel_ModuleMaster,
   ]
})
export class ExpectedLevelModule {}