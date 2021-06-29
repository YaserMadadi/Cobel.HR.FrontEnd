import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { QuantitativeAppraise } from './quantitativeAppraise';



@Injectable({ providedIn: 'root' })
export class QuantitativeAppraiseServiceCollection extends ServiceCollection<QuantitativeAppraise> {

  constructor(public API_Operation: API_Operation<QuantitativeAppraise>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}