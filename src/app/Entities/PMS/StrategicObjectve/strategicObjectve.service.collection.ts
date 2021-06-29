import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { StrategicObjectve } from './strategicObjectve';



@Injectable({ providedIn: 'root' })
export class StrategicObjectveServiceCollection extends ServiceCollection<StrategicObjectve> {

  constructor(public API_Operation: API_Operation<StrategicObjectve>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}