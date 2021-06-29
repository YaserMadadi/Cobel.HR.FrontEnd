import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { AssessmentScoreService } from './assessmentScore.service';
import { AssessmentScoreServiceCollection } from './assessmentScore.service.collection';



@NgModule({
  declarations: [
    // No Item...
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
  ],
  exports: [
    // No Item...
  ],
  providers: [
    //AssessmentScoreService,
    //AssessmentScoreServiceCollection
  ]
})
export class AssessmentScore_ModuleDetail { }