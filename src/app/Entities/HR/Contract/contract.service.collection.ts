import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Contract } from './contract';



@Injectable({ providedIn: 'root' })
export class ContractServiceCollection extends ServiceCollection<Contract> {

  constructor(public API_Operation: API_Operation<Contract>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}