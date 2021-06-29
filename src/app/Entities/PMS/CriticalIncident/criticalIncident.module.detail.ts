import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CriticalIncidentService } from './criticalIncident.service';
import { CriticalIncidentServiceCollection } from './criticalIncident.service.collection';


import { CriticalIncident_CriticalIncidentRecognition_DetailUI } from './detail/criticalIncident-criticalIncidentRecognition.detail';
import { CriticalIncidentRecognition_ModuleMaster } from '../CriticalIncidentRecognition/criticalIncidentRecognition.module.master';

@NgModule({
  declarations: [
    CriticalIncident_CriticalIncidentRecognition_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		CriticalIncidentRecognition_ModuleMaster,
  ],
  exports: [
    CriticalIncident_CriticalIncidentRecognition_DetailUI
  ],
  providers: [
    //CriticalIncidentService,
    //CriticalIncidentServiceCollection
  ]
})
export class CriticalIncident_ModuleDetail { }