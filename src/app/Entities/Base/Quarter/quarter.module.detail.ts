import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { QuarterService } from './quarter.service';
import { QuarterServiceCollection } from './quarter.service.collection';


import { Quarter_YearQuarter_DetailUI } from './detail/quarter-yearQuarter.detail';
import { YearQuarter_ModuleMaster } from '../YearQuarter/yearQuarter.module.master';

@NgModule({
  declarations: [
    Quarter_YearQuarter_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		YearQuarter_ModuleMaster,
  ],
  exports: [
    Quarter_YearQuarter_DetailUI
  ],
  providers: [
    //QuarterService,
    //QuarterServiceCollection
  ]
})
export class Quarter_ModuleDetail { }