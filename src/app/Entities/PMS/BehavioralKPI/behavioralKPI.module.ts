import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { BehavioralKPIService } from './behavioralKPI.service';
import { BehavioralKPIServiceCollection } from './behavioralKPI.service.collection';

import { BehavioralKPIIndexUI } from './index/behavioralKPI.index';
import { BehavioralKPI_ModuleFunc } from './behavioralKPI.module.func';
import { BehavioralKPI_ModuleMaster } from './behavioralKPI.module.master';


import { BehavioralAppraise_ModuleFunc } from '../BehavioralAppraise/behavioralAppraise.module.func';
import { BehavioralAppraise_ModuleMaster } from '../BehavioralAppraise/behavioralAppraise.module.master';

@NgModule({
  declarations: [
    BehavioralKPIIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    BehavioralKPI_ModuleMaster,
		BehavioralAppraise_ModuleMaster,
  ],
  exports: [
    BehavioralKPIIndexUI,
		BehavioralKPI_ModuleMaster,
  ],
  providers: [
    // BehavioralKPIService,
    // BehavioralKPIServiceCollection
  ]
})
export class BehavioralKPIModule {}