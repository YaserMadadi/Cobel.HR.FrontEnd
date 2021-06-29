import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { UserAccount } from './userAccount';



@Injectable({ providedIn: 'root' })
export class UserAccountServiceCollection extends ServiceCollection<UserAccount> {

  constructor(public API_Operation: API_Operation<UserAccount>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}