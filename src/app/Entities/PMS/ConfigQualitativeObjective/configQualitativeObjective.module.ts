import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { ConfigQualitativeObjectiveService } from './configQualitativeObjective.service';
import { ConfigQualitativeObjectiveServiceCollection } from './configQualitativeObjective.service.collection';

import { ConfigQualitativeObjectiveIndexUI } from './index/configQualitativeObjective.index';
import { ConfigQualitativeObjective_ModuleFunc } from './configQualitativeObjective.module.func';
import { ConfigQualitativeObjective_ModuleMaster } from './configQualitativeObjective.module.master';


import { ConfigQualitativeKPI_ModuleFunc } from '../ConfigQualitativeKPI/configQualitativeKPI.module.func';
import { ConfigQualitativeKPI_ModuleMaster } from '../ConfigQualitativeKPI/configQualitativeKPI.module.master';

@NgModule({
  declarations: [
    ConfigQualitativeObjectiveIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    ConfigQualitativeObjective_ModuleMaster,
		ConfigQualitativeKPI_ModuleMaster,
  ],
  exports: [
    ConfigQualitativeObjectiveIndexUI,
		ConfigQualitativeObjective_ModuleMaster,
   ]
})
export class ConfigQualitativeObjectiveModule {}