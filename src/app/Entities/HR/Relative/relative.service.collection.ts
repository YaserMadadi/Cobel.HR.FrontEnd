import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Relative } from './relative';



@Injectable({ providedIn: 'root' })
export class RelativeServiceCollection extends ServiceCollection<Relative> {

  constructor(public API_Operation: API_Operation<Relative>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}