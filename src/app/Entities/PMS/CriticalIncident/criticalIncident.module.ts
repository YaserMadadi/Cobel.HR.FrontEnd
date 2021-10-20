import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { CriticalIncidentService } from './criticalIncident.service';
import { CriticalIncidentServiceCollection } from './criticalIncident.service.collection';

import { CriticalIncidentIndexUI } from './index/criticalIncident.index';
import { CriticalIncident_ModuleFunc } from './criticalIncident.module.func';
import { CriticalIncident_ModuleMaster } from './criticalIncident.module.master';


import { CriticalIncidentRecognition_ModuleFunc } from '../CriticalIncidentRecognition/criticalIncidentRecognition.module.func';
import { CriticalIncidentRecognition_ModuleMaster } from '../CriticalIncidentRecognition/criticalIncidentRecognition.module.master';

@NgModule({
  declarations: [
    CriticalIncidentIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    CriticalIncident_ModuleMaster,
		CriticalIncidentRecognition_ModuleMaster,
  ],
  exports: [
    CriticalIncidentIndexUI,
		CriticalIncident_ModuleMaster,
   ]
})
export class CriticalIncidentModule {}