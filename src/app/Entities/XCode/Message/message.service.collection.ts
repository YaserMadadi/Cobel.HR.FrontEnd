import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Message } from './message';



@Injectable({ providedIn: 'root' })
export class MessageServiceCollection extends ServiceCollection<Message> {

  constructor(public API_Operation: API_Operation<Message>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}