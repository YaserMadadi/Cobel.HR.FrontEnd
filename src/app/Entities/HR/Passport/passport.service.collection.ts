import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Passport } from './passport';



@Injectable({ providedIn: 'root' })
export class PassportServiceCollection extends ServiceCollection<Passport> {

  constructor(public API_Operation: API_Operation<Passport>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}