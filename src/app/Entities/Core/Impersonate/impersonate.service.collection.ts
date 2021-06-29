import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Impersonate } from './impersonate';



@Injectable({ providedIn: 'root' })
export class ImpersonateServiceCollection extends ServiceCollection<Impersonate> {

  constructor(public API_Operation: API_Operation<Impersonate>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}