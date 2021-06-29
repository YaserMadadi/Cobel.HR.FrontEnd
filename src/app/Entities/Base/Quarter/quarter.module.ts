import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { QuarterService } from './quarter.service';
import { QuarterServiceCollection } from './quarter.service.collection';

import { QuarterIndexUI } from './index/quarter.index';
import { Quarter_ModuleFunc } from './quarter.module.func';
import { Quarter_ModuleMaster } from './quarter.module.master';


import { YearQuarter_ModuleFunc } from '../YearQuarter/yearQuarter.module.func';
import { YearQuarter_ModuleMaster } from '../YearQuarter/yearQuarter.module.master';

@NgModule({
  declarations: [
    QuarterIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Quarter_ModuleMaster,
		YearQuarter_ModuleMaster,
  ],
  exports: [
    QuarterIndexUI,
		Quarter_ModuleMaster,
  ],
  providers: [
    // QuarterService,
    // QuarterServiceCollection
  ]
})
export class QuarterModule {}