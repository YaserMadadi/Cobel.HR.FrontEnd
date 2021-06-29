import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { FinalAppraise } from './finalAppraise';



@Injectable({ providedIn: 'root' })
export class FinalAppraiseServiceCollection extends ServiceCollection<FinalAppraise> {

  constructor(public API_Operation: API_Operation<FinalAppraise>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}