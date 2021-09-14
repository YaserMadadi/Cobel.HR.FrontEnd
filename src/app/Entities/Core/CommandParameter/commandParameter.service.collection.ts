import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { CommandParameter } from './commandParameter';



@Injectable({ providedIn: 'root' })
export class CommandParameterServiceCollection extends ServiceCollection<CommandParameter> {

  constructor(public API_Operation: API_Operation<CommandParameter>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}
