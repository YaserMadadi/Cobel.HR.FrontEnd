import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { MilitaryServiceExcemption } from './militaryServiceExcemption';



@Injectable({ providedIn: 'root' })
export class MilitaryServiceExcemptionServiceCollection extends ServiceCollection<MilitaryServiceExcemption> {

  constructor(public API_Operation: API_Operation<MilitaryServiceExcemption>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}