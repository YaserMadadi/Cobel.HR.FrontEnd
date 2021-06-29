import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CriticalIncidentRecognitionService } from './criticalIncidentRecognition.service';
import { CriticalIncidentRecognitionServiceCollection } from './criticalIncidentRecognition.service.collection';



@NgModule({
  declarations: [
    // No Item...
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
  ],
  exports: [
    // No Item...
  ],
  providers: [
    //CriticalIncidentRecognitionService,
    //CriticalIncidentRecognitionServiceCollection
  ]
})
export class CriticalIncidentRecognition_ModuleDetail { }