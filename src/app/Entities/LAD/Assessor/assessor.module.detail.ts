import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { AssessorService } from './assessor.service';
import { AssessorServiceCollection } from './assessor.service.collection';


import { Assessor_Assessment_DetailUI } from './detail/assessor-assessment.detail';
import { Assessment_ModuleMaster } from '../Assessment/assessment.module.master';
import { Assessor_AssessorConnectionLine_DetailUI } from './detail/assessor-assessorConnectionLine.detail';
import { AssessorConnectionLine_ModuleMaster } from '../AssessorConnectionLine/assessorConnectionLine.module.master';

@NgModule({
  declarations: [
    Assessor_Assessment_DetailUI,
		Assessor_AssessorConnectionLine_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		Assessment_ModuleMaster,
		AssessorConnectionLine_ModuleMaster,
  ],
  exports: [
    Assessor_Assessment_DetailUI,
		Assessor_AssessorConnectionLine_DetailUI
  ],
  
})
export class Assessor_ModuleDetail { }