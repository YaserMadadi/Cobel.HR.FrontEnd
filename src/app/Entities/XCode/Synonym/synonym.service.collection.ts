import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Synonym } from './synonym';



@Injectable({ providedIn: 'root' })
export class SynonymServiceCollection extends ServiceCollection<Synonym> {

  constructor(public API_Operation: API_Operation<Synonym>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}