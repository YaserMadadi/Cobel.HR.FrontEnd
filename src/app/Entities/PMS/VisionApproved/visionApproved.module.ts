import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { VisionApprovedService } from './visionApproved.service';
import { VisionApprovedServiceCollection } from './visionApproved.service.collection';

import { VisionApprovedIndexUI } from './index/visionApproved.index';
import { VisionApproved_ModuleFunc } from './visionApproved.module.func';
import { VisionApproved_ModuleMaster } from './visionApproved.module.master';



@NgModule({
  declarations: [
    VisionApprovedIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    VisionApproved_ModuleMaster,
  ],
  exports: [
    VisionApprovedIndexUI,
		VisionApproved_ModuleMaster,
  ],
  providers: [
    // VisionApprovedService,
    // VisionApprovedServiceCollection
  ]
})
export class VisionApprovedModule {}