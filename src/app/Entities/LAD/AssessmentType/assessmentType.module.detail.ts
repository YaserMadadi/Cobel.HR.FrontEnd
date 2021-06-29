import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { AssessmentTypeService } from './assessmentType.service';
import { AssessmentTypeServiceCollection } from './assessmentType.service.collection';


import { AssessmentType_Assessment_DetailUI } from './detail/assessmentType-assessment.detail';
import { Assessment_ModuleMaster } from '../Assessment/assessment.module.master';

@NgModule({
  declarations: [
    AssessmentType_Assessment_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		Assessment_ModuleMaster,
  ],
  exports: [
    AssessmentType_Assessment_DetailUI
  ],
  providers: [
    //AssessmentTypeService,
    //AssessmentTypeServiceCollection
  ]
})
export class AssessmentType_ModuleDetail { }