import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { NonOperationalAppraiseService } from './nonOperationalAppraise.service';
import { NonOperationalAppraiseServiceCollection } from './nonOperationalAppraise.service.collection';

import { NonOperationalAppraiseIndexUI } from './index/nonOperationalAppraise.index';
import { NonOperationalAppraise_ModuleFunc } from './nonOperationalAppraise.module.func';
import { NonOperationalAppraise_ModuleMaster } from './nonOperationalAppraise.module.master';



@NgModule({
  declarations: [
    NonOperationalAppraiseIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    NonOperationalAppraise_ModuleMaster,
  ],
  exports: [
    NonOperationalAppraiseIndexUI,
		NonOperationalAppraise_ModuleMaster,
  ],
  providers: [
    // NonOperationalAppraiseService,
    // NonOperationalAppraiseServiceCollection
  ]
})
export class NonOperationalAppraiseModule {}