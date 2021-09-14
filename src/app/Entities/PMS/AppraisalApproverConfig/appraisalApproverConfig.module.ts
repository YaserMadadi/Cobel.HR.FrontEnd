import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { AppraisalApproverConfigService } from './appraisalApproverConfig.service';
import { AppraisalApproverConfigServiceCollection } from './appraisalApproverConfig.service.collection';

import { AppraisalApproverConfigIndexUI } from './index/appraisalApproverConfig.index';
import { AppraisalApproverConfig_ModuleFunc } from './appraisalApproverConfig.module.func';
import { AppraisalApproverConfig_ModuleMaster } from './appraisalApproverConfig.module.master';



@NgModule({
  declarations: [
    AppraisalApproverConfigIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    AppraisalApproverConfig_ModuleMaster,
  ],
  exports: [
    AppraisalApproverConfigIndexUI,
		AppraisalApproverConfig_ModuleMaster,
   ]
})
export class AppraisalApproverConfigModule {}