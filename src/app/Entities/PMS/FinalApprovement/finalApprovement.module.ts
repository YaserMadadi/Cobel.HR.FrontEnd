import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { FinalApprovementService } from './finalApprovement.service';
import { FinalApprovementServiceCollection } from './finalApprovement.service.collection';

import { FinalApprovementIndexUI } from './index/finalApprovement.index';
import { FinalApprovement_ModuleFunc } from './finalApprovement.module.func';
import { FinalApprovement_ModuleMaster } from './finalApprovement.module.master';



@NgModule({
  declarations: [
    FinalApprovementIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    FinalApprovement_ModuleMaster,
  ],
  exports: [
    FinalApprovementIndexUI,
		FinalApprovement_ModuleMaster,
   ]
})
export class FinalApprovementModule {}