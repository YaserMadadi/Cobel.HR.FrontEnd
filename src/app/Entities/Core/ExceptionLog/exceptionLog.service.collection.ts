import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { ExceptionLog } from './exceptionLog';

import { CommandParameter } from '../CommandParameter/commandParameter';


@Injectable({ providedIn: 'root' })
export class ExceptionLogServiceCollection extends ServiceCollection<ExceptionLog> {

  constructor(public API_Operation: API_Operation<ExceptionLog>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfCommandParameter(exceptionLog: ExceptionLog, commandParameter: CommandParameter = CommandParameter.SeekInstance()): Promise<CommandParameter[]> {
    return super.CollectionOf<CommandParameter>(exceptionLog, commandParameter);
  }

	//endregion
}
