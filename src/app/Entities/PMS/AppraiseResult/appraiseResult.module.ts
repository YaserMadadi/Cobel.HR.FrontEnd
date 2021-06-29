import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { AppraiseResultService } from './appraiseResult.service';
import { AppraiseResultServiceCollection } from './appraiseResult.service.collection';

import { AppraiseResultIndexUI } from './index/appraiseResult.index';
import { AppraiseResult_ModuleFunc } from './appraiseResult.module.func';
import { AppraiseResult_ModuleMaster } from './appraiseResult.module.master';



@NgModule({
  declarations: [
    AppraiseResultIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    AppraiseResult_ModuleMaster,
  ],
  exports: [
    AppraiseResultIndexUI,
		AppraiseResult_ModuleMaster,
  ],
  providers: [
    // AppraiseResultService,
    // AppraiseResultServiceCollection
  ]
})
export class AppraiseResultModule {}