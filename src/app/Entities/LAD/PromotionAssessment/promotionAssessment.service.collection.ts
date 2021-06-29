import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { PromotionAssessment } from './promotionAssessment';



@Injectable({ providedIn: 'root' })
export class PromotionAssessmentServiceCollection extends ServiceCollection<PromotionAssessment> {

  constructor(public API_Operation: API_Operation<PromotionAssessment>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}