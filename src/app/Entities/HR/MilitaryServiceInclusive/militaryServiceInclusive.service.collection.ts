import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { MilitaryServiceInclusive } from './militaryServiceInclusive';



@Injectable({ providedIn: 'root' })
export class MilitaryServiceInclusiveServiceCollection extends ServiceCollection<MilitaryServiceInclusive> {

  constructor(public API_Operation: API_Operation<MilitaryServiceInclusive>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}