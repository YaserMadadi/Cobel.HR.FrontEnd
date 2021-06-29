import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { AssessorService } from './assessor.service';
import { AssessorServiceCollection } from './assessor.service.collection';

import { AssessorIndexUI } from './index/assessor.index';
import { Assessor_ModuleFunc } from './assessor.module.func';
import { Assessor_ModuleMaster } from './assessor.module.master';


import { Assessment_ModuleFunc } from '../Assessment/assessment.module.func';
import { Assessment_ModuleMaster } from '../Assessment/assessment.module.master';
import { AssessorConnectionLine_ModuleFunc } from '../AssessorConnectionLine/assessorConnectionLine.module.func';
import { AssessorConnectionLine_ModuleMaster } from '../AssessorConnectionLine/assessorConnectionLine.module.master';

@NgModule({
  declarations: [
    AssessorIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Assessor_ModuleMaster,
		Assessment_ModuleMaster,
		AssessorConnectionLine_ModuleMaster,
  ],
  exports: [
    AssessorIndexUI,
		Assessor_ModuleMaster,
  ],
  providers: [
    // AssessorService,
    // AssessorServiceCollection
  ]
})
export class AssessorModule {}