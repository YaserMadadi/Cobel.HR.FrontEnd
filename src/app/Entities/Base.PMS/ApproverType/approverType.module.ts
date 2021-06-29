import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { ApproverTypeService } from './approverType.service';
import { ApproverTypeServiceCollection } from './approverType.service.collection';

import { ApproverTypeIndexUI } from './index/approverType.index';
import { ApproverType_ModuleFunc } from './approverType.module.func';
import { ApproverType_ModuleMaster } from './approverType.module.master';


import { AppraisalApproverConfig_ModuleFunc } from '../../PMS/AppraisalApproverConfig/appraisalApproverConfig.module.func';
import { AppraisalApproverConfig_ModuleMaster } from '../../PMS/AppraisalApproverConfig/appraisalApproverConfig.module.master';

@NgModule({
  declarations: [
    ApproverTypeIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    ApproverType_ModuleMaster,
		AppraisalApproverConfig_ModuleMaster,
  ],
  exports: [
    ApproverTypeIndexUI,
		ApproverType_ModuleMaster,
  ],
  providers: [
    // ApproverTypeService,
    // ApproverTypeServiceCollection
  ]
})
export class ApproverTypeModule {}