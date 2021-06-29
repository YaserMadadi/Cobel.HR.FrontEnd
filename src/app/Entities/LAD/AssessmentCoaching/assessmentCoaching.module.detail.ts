﻿import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { AssessmentCoachingService } from './assessmentCoaching.service';
import { AssessmentCoachingServiceCollection } from './assessmentCoaching.service.collection';



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
    //AssessmentCoachingService,
    //AssessmentCoachingServiceCollection
  ]
})
export class AssessmentCoaching_ModuleDetail { }