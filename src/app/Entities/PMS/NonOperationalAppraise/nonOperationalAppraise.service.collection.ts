import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { NonOperationalAppraise } from './nonOperationalAppraise';



@Injectable({ providedIn: 'root' })
export class NonOperationalAppraiseServiceCollection extends ServiceCollection<NonOperationalAppraise> {

  constructor(public API_Operation: API_Operation<NonOperationalAppraise>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}