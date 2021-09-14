import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { FinalAppraiseService } from './finalAppraise.service';
import { FinalAppraiseServiceCollection } from './finalAppraise.service.collection';

import { FinalAppraiseIndexUI } from './index/finalAppraise.index';
import { FinalAppraise_ModuleFunc } from './finalAppraise.module.func';
import { FinalAppraise_ModuleMaster } from './finalAppraise.module.master';



@NgModule({
  declarations: [
    FinalAppraiseIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    FinalAppraise_ModuleMaster,
  ],
  exports: [
    FinalAppraiseIndexUI,
		FinalAppraise_ModuleMaster,
   ]
})
export class FinalAppraiseModule {}