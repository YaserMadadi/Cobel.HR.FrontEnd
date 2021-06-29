import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { ApprovementTypeService } from './approvementType.service';
import { ApprovementTypeServiceCollection } from './approvementType.service.collection';

import { ApprovementTypeIndexUI } from './index/approvementType.index';
import { ApprovementType_ModuleFunc } from './approvementType.module.func';
import { ApprovementType_ModuleMaster } from './approvementType.module.master';


import { VisionApproved_ModuleFunc } from '../../PMS/VisionApproved/visionApproved.module.func';
import { VisionApproved_ModuleMaster } from '../../PMS/VisionApproved/visionApproved.module.master';

@NgModule({
  declarations: [
    ApprovementTypeIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    ApprovementType_ModuleMaster,
		VisionApproved_ModuleMaster,
  ],
  exports: [
    ApprovementTypeIndexUI,
		ApprovementType_ModuleMaster,
  ],
  providers: [
    // ApprovementTypeService,
    // ApprovementTypeServiceCollection
  ]
})
export class ApprovementTypeModule {}