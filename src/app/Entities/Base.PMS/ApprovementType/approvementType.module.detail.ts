import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ApprovementTypeService } from './approvementType.service';
import { ApprovementTypeServiceCollection } from './approvementType.service.collection';


import { ApprovementType_VisionApproved_DetailUI } from './detail/approvementType-visionApproved.detail';
import { VisionApproved_ModuleMaster } from '../../PMS/VisionApproved/visionApproved.module.master';

@NgModule({
  declarations: [
    ApprovementType_VisionApproved_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		VisionApproved_ModuleMaster,
  ],
  exports: [
    ApprovementType_VisionApproved_DetailUI
  ],
  
})
export class ApprovementType_ModuleDetail { }