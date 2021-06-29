import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CoachingQuestionaryDetailService } from './coachingQuestionaryDetail.service';
import { CoachingQuestionaryDetailServiceCollection } from './coachingQuestionaryDetail.service.collection';



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
    //CoachingQuestionaryDetailService,
    //CoachingQuestionaryDetailServiceCollection
  ]
})
export class CoachingQuestionaryDetail_ModuleDetail { }