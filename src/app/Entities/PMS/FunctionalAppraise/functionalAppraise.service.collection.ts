import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { FunctionalAppraise } from './functionalAppraise';



@Injectable({ providedIn: 'root' })
export class FunctionalAppraiseServiceCollection extends ServiceCollection<FunctionalAppraise> {

  constructor(public API_Operation: API_Operation<FunctionalAppraise>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}