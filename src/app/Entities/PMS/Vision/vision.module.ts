import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { VisionService } from './vision.service';
import { VisionServiceCollection } from './vision.service.collection';

import { VisionIndexUI } from './index/vision.index';
import { Vision_ModuleFunc } from './vision.module.func';
import { Vision_ModuleMaster } from './vision.module.master';


import { IndividualDevelopmentPlan_ModuleFunc } from '../IndividualDevelopmentPlan/individualDevelopmentPlan.module.func';
import { IndividualDevelopmentPlan_ModuleMaster } from '../IndividualDevelopmentPlan/individualDevelopmentPlan.module.master';
import { VisionApproved_ModuleFunc } from '../VisionApproved/visionApproved.module.func';
import { VisionApproved_ModuleMaster } from '../VisionApproved/visionApproved.module.master';
import { VisionComment_ModuleFunc } from '../VisionComment/visionComment.module.func';
import { VisionComment_ModuleMaster } from '../VisionComment/visionComment.module.master';

@NgModule({
  declarations: [
    VisionIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Vision_ModuleMaster,
		IndividualDevelopmentPlan_ModuleMaster,
		VisionApproved_ModuleMaster,
		VisionComment_ModuleMaster,
  ],
  exports: [
    VisionIndexUI,
		Vision_ModuleMaster,
   ]
})
export class VisionModule {}