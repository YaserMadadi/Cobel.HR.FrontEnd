import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { BehavioralAppraiseService } from './behavioralAppraise.service';
import { BehavioralAppraiseServiceCollection } from './behavioralAppraise.service.collection';

import { BehavioralAppraiseIndexUI } from './index/behavioralAppraise.index';
import { BehavioralAppraise_ModuleFunc } from './behavioralAppraise.module.func';
import { BehavioralAppraise_ModuleMaster } from './behavioralAppraise.module.master';



@NgModule({
  declarations: [
    BehavioralAppraiseIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    BehavioralAppraise_ModuleMaster,
  ],
  exports: [
    BehavioralAppraiseIndexUI,
		BehavioralAppraise_ModuleMaster,
  ],
  providers: [
    // BehavioralAppraiseService,
    // BehavioralAppraiseServiceCollection
  ]
})
export class BehavioralAppraiseModule {}