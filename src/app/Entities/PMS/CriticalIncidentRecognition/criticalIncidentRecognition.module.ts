import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { CriticalIncidentRecognitionService } from './criticalIncidentRecognition.service';
import { CriticalIncidentRecognitionServiceCollection } from './criticalIncidentRecognition.service.collection';

import { CriticalIncidentRecognitionIndexUI } from './index/criticalIncidentRecognition.index';
import { CriticalIncidentRecognition_ModuleFunc } from './criticalIncidentRecognition.module.func';
import { CriticalIncidentRecognition_ModuleMaster } from './criticalIncidentRecognition.module.master';



@NgModule({
  declarations: [
    CriticalIncidentRecognitionIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    CriticalIncidentRecognition_ModuleMaster,
  ],
  exports: [
    CriticalIncidentRecognitionIndexUI,
		CriticalIncidentRecognition_ModuleMaster,
   ]
})
export class CriticalIncidentRecognitionModule {}