import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CoachingQuestionaryAnsweredService } from './coachingQuestionaryAnswered.service';
import { CoachingQuestionaryAnsweredServiceCollection } from './coachingQuestionaryAnswered.service.collection';



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
    //CoachingQuestionaryAnsweredService,
    //CoachingQuestionaryAnsweredServiceCollection
  ]
})
export class CoachingQuestionaryAnswered_ModuleDetail { }