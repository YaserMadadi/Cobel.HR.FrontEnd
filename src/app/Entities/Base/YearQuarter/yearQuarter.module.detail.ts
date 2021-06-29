import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { YearQuarterService } from './yearQuarter.service';
import { YearQuarterServiceCollection } from './yearQuarter.service.collection';


import { DeadLine_AssessmentTraining_DetailUI } from './detail/deadLine-assessmentTraining.detail';
import { AssessmentTraining_ModuleMaster } from '../../LAD/AssessmentTraining/assessmentTraining.module.master';

@NgModule({
  declarations: [
    DeadLine_AssessmentTraining_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		AssessmentTraining_ModuleMaster,
  ],
  exports: [
    DeadLine_AssessmentTraining_DetailUI
  ],
  providers: [
    //YearQuarterService,
    //YearQuarterServiceCollection
  ]
})
export class YearQuarter_ModuleDetail { }