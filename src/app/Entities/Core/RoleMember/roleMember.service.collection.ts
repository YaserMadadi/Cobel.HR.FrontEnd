import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { RoleMember } from './roleMember';



@Injectable({ providedIn: 'root' })
export class RoleMemberServiceCollection extends ServiceCollection<RoleMember> {

  constructor(public API_Operation: API_Operation<RoleMember>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}