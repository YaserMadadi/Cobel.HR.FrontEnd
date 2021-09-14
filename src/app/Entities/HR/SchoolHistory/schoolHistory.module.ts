import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { SchoolHistoryService } from './schoolHistory.service';
import { SchoolHistoryServiceCollection } from './schoolHistory.service.collection';

import { SchoolHistoryIndexUI } from './index/schoolHistory.index';
import { SchoolHistory_ModuleFunc } from './schoolHistory.module.func';
import { SchoolHistory_ModuleMaster } from './schoolHistory.module.master';



@NgModule({
  declarations: [
    SchoolHistoryIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    SchoolHistory_ModuleMaster,
  ],
  exports: [
    SchoolHistoryIndexUI,
		SchoolHistory_ModuleMaster,
   ]
})
export class SchoolHistoryModule {}