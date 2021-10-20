import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { FunctionalAppraiseService } from './functionalAppraise.service';
import { FunctionalAppraiseServiceCollection } from './functionalAppraise.service.collection';

import { FunctionalAppraiseIndexUI } from './index/functionalAppraise.index';
import { FunctionalAppraise_ModuleFunc } from './functionalAppraise.module.func';
import { FunctionalAppraise_ModuleMaster } from './functionalAppraise.module.master';



@NgModule({
  declarations: [
    FunctionalAppraiseIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    FunctionalAppraise_ModuleMaster,
  ],
  exports: [
    FunctionalAppraiseIndexUI,
		FunctionalAppraise_ModuleMaster,
   ]
})
export class FunctionalAppraiseModule {}