import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { RolePermission } from './rolePermission';



@Injectable({ providedIn: 'root' })
export class RolePermissionServiceCollection extends ServiceCollection<RolePermission> {

  constructor(public API_Operation: API_Operation<RolePermission>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}