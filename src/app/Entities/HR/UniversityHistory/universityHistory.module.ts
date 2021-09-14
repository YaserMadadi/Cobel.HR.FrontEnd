import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { UniversityHistoryService } from './universityHistory.service';
import { UniversityHistoryServiceCollection } from './universityHistory.service.collection';

import { UniversityHistoryIndexUI } from './index/universityHistory.index';
import { UniversityHistory_ModuleFunc } from './universityHistory.module.func';
import { UniversityHistory_ModuleMaster } from './universityHistory.module.master';


import { UniversityTerminate_ModuleFunc } from '../UniversityTerminate/universityTerminate.module.func';
import { UniversityTerminate_ModuleMaster } from '../UniversityTerminate/universityTerminate.module.master';

@NgModule({
  declarations: [
    UniversityHistoryIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    UniversityHistory_ModuleMaster,
		UniversityTerminate_ModuleMaster,
  ],
  exports: [
    UniversityHistoryIndexUI,
		UniversityHistory_ModuleMaster,
   ]
})
export class UniversityHistoryModule {}