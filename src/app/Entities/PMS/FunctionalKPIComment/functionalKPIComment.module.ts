import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { FunctionalKPICommentService } from './functionalKPIComment.service';
import { FunctionalKPICommentServiceCollection } from './functionalKPIComment.service.collection';

import { FunctionalKPICommentIndexUI } from './index/functionalKPIComment.index';
import { FunctionalKPIComment_ModuleFunc } from './functionalKPIComment.module.func';
import { FunctionalKPIComment_ModuleMaster } from './functionalKPIComment.module.master';



@NgModule({
  declarations: [
    FunctionalKPICommentIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    FunctionalKPIComment_ModuleMaster,
  ],
  exports: [
    FunctionalKPICommentIndexUI,
		FunctionalKPIComment_ModuleMaster,
  ],
  providers: [
    // FunctionalKPICommentService,
    // FunctionalKPICommentServiceCollection
  ]
})
export class FunctionalKPICommentModule {}