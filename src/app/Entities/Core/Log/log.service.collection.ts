import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Log } from './log';



@Injectable({ providedIn: 'root' })
export class LogServiceCollection extends ServiceCollection<Log> {

  constructor(public API_Operation: API_Operation<Log>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}