import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { PropertyOption } from './propertyOption';



@Injectable({ providedIn: 'root' })
export class PropertyOptionServiceCollection extends ServiceCollection<PropertyOption> {

  constructor(public API_Operation: API_Operation<PropertyOption>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}