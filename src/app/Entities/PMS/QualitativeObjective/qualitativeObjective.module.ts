import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { QualitativeObjectiveService } from './qualitativeObjective.service';
import { QualitativeObjectiveServiceCollection } from './qualitativeObjective.service.collection';

import { QualitativeObjectiveIndexUI } from './index/qualitativeObjective.index';
import { QualitativeObjective_ModuleFunc } from './qualitativeObjective.module.func';
import { QualitativeObjective_ModuleMaster } from './qualitativeObjective.module.master';


import { QualitativeKPI_ModuleFunc } from '../QualitativeKPI/qualitativeKPI.module.func';
import { QualitativeKPI_ModuleMaster } from '../QualitativeKPI/qualitativeKPI.module.master';

@NgModule({
  declarations: [
    QualitativeObjectiveIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    QualitativeObjective_ModuleMaster,
		QualitativeKPI_ModuleMaster,
  ],
  exports: [
    QualitativeObjectiveIndexUI,
		QualitativeObjective_ModuleMaster,
   ]
})
export class QualitativeObjectiveModule {}