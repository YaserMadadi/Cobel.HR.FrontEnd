import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { RotationAssessmentService } from './rotationAssessment.service';
import { RotationAssessmentServiceCollection } from './rotationAssessment.service.collection';

import { RotationAssessmentIndexUI } from './index/rotationAssessment.index';
import { RotationAssessment_ModuleFunc } from './rotationAssessment.module.func';
import { RotationAssessment_ModuleMaster } from './rotationAssessment.module.master';



@NgModule({
  declarations: [
    RotationAssessmentIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    RotationAssessment_ModuleMaster,
  ],
  exports: [
    RotationAssessmentIndexUI,
		RotationAssessment_ModuleMaster,
  ],
  providers: [
    // RotationAssessmentService,
    // RotationAssessmentServiceCollection
  ]
})
export class RotationAssessmentModule {}