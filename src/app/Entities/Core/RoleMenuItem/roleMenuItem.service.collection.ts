import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { RoleMenuItem } from './roleMenuItem';



@Injectable({ providedIn: 'root' })
export class RoleMenuItemServiceCollection extends ServiceCollection<RoleMenuItem> {

  constructor(public API_Operation: API_Operation<RoleMenuItem>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}
