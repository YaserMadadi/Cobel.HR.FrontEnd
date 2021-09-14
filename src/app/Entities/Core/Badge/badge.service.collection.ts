import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Badge } from './badge';



@Injectable({ providedIn: 'root' })
export class BadgeServiceCollection extends ServiceCollection<Badge> {

  constructor(public API_Operation: API_Operation<Badge>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}
