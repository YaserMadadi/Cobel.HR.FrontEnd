import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CriticalIncidentTypeService } from './criticalIncidentType.service';
import { CriticalIncidentTypeServiceCollection } from './criticalIncidentType.service.collection';


import { CriticalIncidentType_CriticalIncident_DetailUI } from './detail/criticalIncidentType-criticalIncident.detail';
import { CriticalIncident_ModuleMaster } from '../CriticalIncident/criticalIncident.module.master';

@NgModule({
  declarations: [
    CriticalIncidentType_CriticalIncident_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		CriticalIncident_ModuleMaster,
  ],
  exports: [
    CriticalIncidentType_CriticalIncident_DetailUI
  ],
  
})
export class CriticalIncidentType_ModuleDetail { }