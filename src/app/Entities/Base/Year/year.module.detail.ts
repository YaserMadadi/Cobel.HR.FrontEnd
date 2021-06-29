import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { YearService } from './year.service';
import { YearServiceCollection } from './year.service.collection';


import { Year_TargetSetting_DetailUI } from './detail/year-targetSetting.detail';
import { TargetSetting_ModuleMaster } from '../../PMS/TargetSetting/targetSetting.module.master';
import { Year_YearQuarter_DetailUI } from './detail/year-yearQuarter.detail';
import { YearQuarter_ModuleMaster } from '../YearQuarter/yearQuarter.module.master';

@NgModule({
  declarations: [
    Year_TargetSetting_DetailUI,
		Year_YearQuarter_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		TargetSetting_ModuleMaster,
		YearQuarter_ModuleMaster,
  ],
  exports: [
    Year_TargetSetting_DetailUI,
		Year_YearQuarter_DetailUI
  ],
  providers: [
    //YearService,
    //YearServiceCollection
  ]
})
export class Year_ModuleDetail { }