import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { AssessorConnectionLineService } from './assessorConnectionLine.service';
import { AssessorConnectionLineServiceCollection } from './assessorConnectionLine.service.collection';

import { AssessorConnectionLineIndexUI } from './index/assessorConnectionLine.index';
import { AssessorConnectionLine_ModuleFunc } from './assessorConnectionLine.module.func';
import { AssessorConnectionLine_ModuleMaster } from './assessorConnectionLine.module.master';



@NgModule({
  declarations: [
    AssessorConnectionLineIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    AssessorConnectionLine_ModuleMaster,
  ],
  exports: [
    AssessorConnectionLineIndexUI,
		AssessorConnectionLine_ModuleMaster,
  ],
  providers: [
    // AssessorConnectionLineService,
    // AssessorConnectionLineServiceCollection
  ]
})
export class AssessorConnectionLineModule {}