import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { ContractType } from './contractType';

import { Contract } from '../../HR/Contract/contract';


@Injectable({ providedIn: 'root' })
export class ContractTypeServiceCollection extends ServiceCollection<ContractType> {

  constructor(public API_Operation: API_Operation<ContractType>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfContract(contractType: ContractType, contract: Contract = Contract.SeekInstance()): Promise<Contract[]> {
    return super.CollectionOf<Contract>(contractType, contract);
  }

	//endregion
}