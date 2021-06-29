import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { PersonConnection } from './personConnection';



@Injectable({ providedIn: 'root' })
export class PersonConnectionServiceCollection extends ServiceCollection<PersonConnection> {

  constructor(public API_Operation: API_Operation<PersonConnection>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}