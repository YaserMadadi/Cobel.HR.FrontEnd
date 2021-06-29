import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { CriticalIncidentTypeService } from './criticalIncidentType.service';
import { CriticalIncidentTypeServiceCollection } from './criticalIncidentType.service.collection';

import { CriticalIncidentTypeIndexUI } from './index/criticalIncidentType.index';
import { CriticalIncidentType_ModuleFunc } from './criticalIncidentType.module.func';
import { CriticalIncidentType_ModuleMaster } from './criticalIncidentType.module.master';


import { CriticalIncident_ModuleFunc } from '../CriticalIncident/criticalIncident.module.func';
import { CriticalIncident_ModuleMaster } from '../CriticalIncident/criticalIncident.module.master';

@NgModule({
  declarations: [
    CriticalIncidentTypeIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    CriticalIncidentType_ModuleMaster,
		CriticalIncident_ModuleMaster,
  ],
  exports: [
    CriticalIncidentTypeIndexUI,
		CriticalIncidentType_ModuleMaster,
  ],
  providers: [
    // CriticalIncidentTypeService,
    // CriticalIncidentTypeServiceCollection
  ]
})
export class CriticalIncidentTypeModule {}