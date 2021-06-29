import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { AppraiseResult } from './appraiseResult';



@Injectable({ providedIn: 'root' })
export class AppraiseResultServiceCollection extends ServiceCollection<AppraiseResult> {

  constructor(public API_Operation: API_Operation<AppraiseResult>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}