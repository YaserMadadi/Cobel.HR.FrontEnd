import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { FunctionalObjectiveCommentService } from './functionalObjectiveComment.service';
import { FunctionalObjectiveCommentServiceCollection } from './functionalObjectiveComment.service.collection';

import { FunctionalObjectiveCommentIndexUI } from './index/functionalObjectiveComment.index';
import { FunctionalObjectiveComment_ModuleFunc } from './functionalObjectiveComment.module.func';
import { FunctionalObjectiveComment_ModuleMaster } from './functionalObjectiveComment.module.master';



@NgModule({
  declarations: [
    FunctionalObjectiveCommentIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    FunctionalObjectiveComment_ModuleMaster,
  ],
  exports: [
    FunctionalObjectiveCommentIndexUI,
		FunctionalObjectiveComment_ModuleMaster,
   ]
})
export class FunctionalObjectiveCommentModule {}