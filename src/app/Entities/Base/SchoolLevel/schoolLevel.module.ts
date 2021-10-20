import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { SchoolLevelService } from './schoolLevel.service';
import { SchoolLevelServiceCollection } from './schoolLevel.service.collection';

import { SchoolLevelIndexUI } from './index/schoolLevel.index';
import { SchoolLevel_ModuleFunc } from './schoolLevel.module.func';
import { SchoolLevel_ModuleMaster } from './schoolLevel.module.master';


import { SchoolHistory_ModuleFunc } from '../../HR/SchoolHistory/schoolHistory.module.func';
import { SchoolHistory_ModuleMaster } from '../../HR/SchoolHistory/schoolHistory.module.master';

@NgModule({
  declarations: [
    SchoolLevelIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    SchoolLevel_ModuleMaster,
		SchoolHistory_ModuleMaster,
  ],
  exports: [
    SchoolLevelIndexUI,
		SchoolLevel_ModuleMaster,
   ]
})
export class SchoolLevelModule {}