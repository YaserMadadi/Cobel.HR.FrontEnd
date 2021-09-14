import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { ConclusionService } from './conclusion.service';
import { ConclusionServiceCollection } from './conclusion.service.collection';

import { ConclusionIndexUI } from './index/conclusion.index';
import { Conclusion_ModuleFunc } from './conclusion.module.func';
import { Conclusion_ModuleMaster } from './conclusion.module.master';



@NgModule({
  declarations: [
    ConclusionIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Conclusion_ModuleMaster,
  ],
  exports: [
    ConclusionIndexUI,
		Conclusion_ModuleMaster,
   ]
})
export class ConclusionModule {}