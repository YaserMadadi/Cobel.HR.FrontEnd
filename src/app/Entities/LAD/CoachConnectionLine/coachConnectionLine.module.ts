import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { CoachConnectionLineService } from './coachConnectionLine.service';
import { CoachConnectionLineServiceCollection } from './coachConnectionLine.service.collection';

import { CoachConnectionLineIndexUI } from './index/coachConnectionLine.index';
import { CoachConnectionLine_ModuleFunc } from './coachConnectionLine.module.func';
import { CoachConnectionLine_ModuleMaster } from './coachConnectionLine.module.master';



@NgModule({
  declarations: [
    CoachConnectionLineIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    CoachConnectionLine_ModuleMaster,
  ],
  exports: [
    CoachConnectionLineIndexUI,
		CoachConnectionLine_ModuleMaster,
   ]
})
export class CoachConnectionLineModule {}