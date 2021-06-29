import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { BehavioralAppraise } from './behavioralAppraise';



@Injectable({ providedIn: 'root' })
export class BehavioralAppraiseServiceCollection extends ServiceCollection<BehavioralAppraise> {

  constructor(public API_Operation: API_Operation<BehavioralAppraise>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}