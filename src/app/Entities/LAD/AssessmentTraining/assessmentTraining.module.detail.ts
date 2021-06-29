import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { AssessmentTrainingService } from './assessmentTraining.service';
import { AssessmentTrainingServiceCollection } from './assessmentTraining.service.collection';



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
    //AssessmentTrainingService,
    //AssessmentTrainingServiceCollection
  ]
})
export class AssessmentTraining_ModuleDetail { }