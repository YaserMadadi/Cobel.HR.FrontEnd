import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { YearQuarterService } from './yearQuarter.service';
import { YearQuarterServiceCollection } from './yearQuarter.service.collection';

import { YearQuarterIndexUI } from './index/yearQuarter.index';
import { YearQuarter_ModuleFunc } from './yearQuarter.module.func';
import { YearQuarter_ModuleMaster } from './yearQuarter.module.master';


import { AssessmentTraining_ModuleFunc } from '../../LAD/AssessmentTraining/assessmentTraining.module.func';
import { AssessmentTraining_ModuleMaster } from '../../LAD/AssessmentTraining/assessmentTraining.module.master';

@NgModule({
  declarations: [
    YearQuarterIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    YearQuarter_ModuleMaster,
		AssessmentTraining_ModuleMaster,
  ],
  exports: [
    YearQuarterIndexUI,
		YearQuarter_ModuleMaster,
   ]
})
export class YearQuarterModule {}