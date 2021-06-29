import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ApproverTypeService } from './approverType.service';
import { ApproverTypeServiceCollection } from './approverType.service.collection';


import { ApproverType_AppraisalApproverConfig_DetailUI } from './detail/approverType-appraisalApproverConfig.detail';
import { AppraisalApproverConfig_ModuleMaster } from '../../PMS/AppraisalApproverConfig/appraisalApproverConfig.module.master';

@NgModule({
  declarations: [
    ApproverType_AppraisalApproverConfig_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		AppraisalApproverConfig_ModuleMaster,
  ],
  exports: [
    ApproverType_AppraisalApproverConfig_DetailUI
  ],
  providers: [
    //ApproverTypeService,
    //ApproverTypeServiceCollection
  ]
})
export class ApproverType_ModuleDetail { }