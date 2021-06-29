import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { SchoolHistory } from './schoolHistory';



@Injectable({ providedIn: 'root' })
export class SchoolHistoryServiceCollection extends ServiceCollection<SchoolHistory> {

  constructor(public API_Operation: API_Operation<SchoolHistory>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}