import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { PromotionResult } from './promotionResult';

import { PromotionAssessment } from '../PromotionAssessment/promotionAssessment';


@Injectable({ providedIn: 'root' })
export class PromotionResultServiceCollection extends ServiceCollection<PromotionResult> {

  constructor(public API_Operation: API_Operation<PromotionResult>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfPromotionAssessment(promotionResult: PromotionResult, promotionAssessment: PromotionAssessment = PromotionAssessment.SeekInstance()): Promise<PromotionAssessment[]> {
    return super.CollectionOf<PromotionAssessment>(promotionResult, promotionAssessment);
  }

	//endregion
}