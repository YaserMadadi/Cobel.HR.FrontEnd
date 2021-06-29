import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { OperationalAppraise } from './operationalAppraise';



@Injectable({ providedIn: 'root' })
export class OperationalAppraiseServiceCollection extends ServiceCollection<OperationalAppraise> {

  constructor(public API_Operation: API_Operation<OperationalAppraise>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}