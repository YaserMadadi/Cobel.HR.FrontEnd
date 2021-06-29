import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { PromotionAssessmentService } from './promotionAssessment.service';
import { PromotionAssessmentServiceCollection } from './promotionAssessment.service.collection';



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
    //PromotionAssessmentService,
    //PromotionAssessmentServiceCollection
  ]
})
export class PromotionAssessment_ModuleDetail { }