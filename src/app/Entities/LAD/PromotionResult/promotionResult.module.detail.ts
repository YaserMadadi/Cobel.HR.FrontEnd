import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { PromotionResultService } from './promotionResult.service';
import { PromotionResultServiceCollection } from './promotionResult.service.collection';


import { PromotionResult_PromotionAssessment_DetailUI } from './detail/promotionResult-promotionAssessment.detail';
import { PromotionAssessment_ModuleMaster } from '../PromotionAssessment/promotionAssessment.module.master';

@NgModule({
  declarations: [
    PromotionResult_PromotionAssessment_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		PromotionAssessment_ModuleMaster,
  ],
  exports: [
    PromotionResult_PromotionAssessment_DetailUI
  ],
  providers: [
    //PromotionResultService,
    //PromotionResultServiceCollection
  ]
})
export class PromotionResult_ModuleDetail { }