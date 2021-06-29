import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { FeedbackSessionService } from './feedbackSession.service';
import { FeedbackSessionServiceCollection } from './feedbackSession.service.collection';



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
    //FeedbackSessionService,
    //FeedbackSessionServiceCollection
  ]
})
export class FeedbackSession_ModuleDetail { }