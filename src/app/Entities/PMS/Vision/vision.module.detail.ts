import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { VisionService } from './vision.service';
import { VisionServiceCollection } from './vision.service.collection';


import { Vision_IndividualDevelopmentPlan_DetailUI } from './detail/vision-individualDevelopmentPlan.detail';
import { IndividualDevelopmentPlan_ModuleMaster } from '../IndividualDevelopmentPlan/individualDevelopmentPlan.module.master';
import { Vision_VisionApproved_DetailUI } from './detail/vision-visionApproved.detail';
import { VisionApproved_ModuleMaster } from '../VisionApproved/visionApproved.module.master';
import { Vision_VisionComment_DetailUI } from './detail/vision-visionComment.detail';
import { VisionComment_ModuleMaster } from '../VisionComment/visionComment.module.master';

@NgModule({
  declarations: [
    Vision_IndividualDevelopmentPlan_DetailUI,
		Vision_VisionApproved_DetailUI,
		Vision_VisionComment_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		IndividualDevelopmentPlan_ModuleMaster,
		VisionApproved_ModuleMaster,
		VisionComment_ModuleMaster,
  ],
  exports: [
    Vision_IndividualDevelopmentPlan_DetailUI,
		Vision_VisionApproved_DetailUI,
		Vision_VisionComment_DetailUI
  ],
  providers: [
    //VisionService,
    //VisionServiceCollection
  ]
})
export class Vision_ModuleDetail { }