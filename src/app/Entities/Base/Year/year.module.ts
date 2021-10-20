import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { YearService } from './year.service';
import { YearServiceCollection } from './year.service.collection';

import { YearIndexUI } from './index/year.index';
import { Year_ModuleFunc } from './year.module.func';
import { Year_ModuleMaster } from './year.module.master';


import { TargetSetting_ModuleFunc } from '../../PMS/TargetSetting/targetSetting.module.func';
import { TargetSetting_ModuleMaster } from '../../PMS/TargetSetting/targetSetting.module.master';
import { YearQuarter_ModuleFunc } from '../YearQuarter/yearQuarter.module.func';
import { YearQuarter_ModuleMaster } from '../YearQuarter/yearQuarter.module.master';

@NgModule({
  declarations: [
    YearIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Year_ModuleMaster,
		TargetSetting_ModuleMaster,
		YearQuarter_ModuleMaster,
  ],
  exports: [
    YearIndexUI,
		Year_ModuleMaster,
   ]
})
export class YearModule {}