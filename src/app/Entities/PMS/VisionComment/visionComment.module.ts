import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { VisionCommentService } from './visionComment.service';
import { VisionCommentServiceCollection } from './visionComment.service.collection';

import { VisionCommentIndexUI } from './index/visionComment.index';
import { VisionComment_ModuleFunc } from './visionComment.module.func';
import { VisionComment_ModuleMaster } from './visionComment.module.master';



@NgModule({
  declarations: [
    VisionCommentIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    VisionComment_ModuleMaster,
  ],
  exports: [
    VisionCommentIndexUI,
		VisionComment_ModuleMaster,
   ]
})
export class VisionCommentModule {}