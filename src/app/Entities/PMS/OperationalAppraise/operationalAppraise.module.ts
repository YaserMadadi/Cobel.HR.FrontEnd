import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { OperationalAppraiseService } from './operationalAppraise.service';
import { OperationalAppraiseServiceCollection } from './operationalAppraise.service.collection';

import { OperationalAppraiseIndexUI } from './index/operationalAppraise.index';
import { OperationalAppraise_ModuleFunc } from './operationalAppraise.module.func';
import { OperationalAppraise_ModuleMaster } from './operationalAppraise.module.master';



@NgModule({
  declarations: [
    OperationalAppraiseIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    OperationalAppraise_ModuleMaster,
  ],
  exports: [
    OperationalAppraiseIndexUI,
		OperationalAppraise_ModuleMaster,
  ],
  providers: [
    // OperationalAppraiseService,
    // OperationalAppraiseServiceCollection
  ]
})
export class OperationalAppraiseModule {}