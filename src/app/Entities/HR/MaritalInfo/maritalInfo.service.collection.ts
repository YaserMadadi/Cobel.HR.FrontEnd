import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { MaritalInfo } from './maritalInfo';



@Injectable({ providedIn: 'root' })
export class MaritalInfoServiceCollection extends ServiceCollection<MaritalInfo> {

  constructor(public API_Operation: API_Operation<MaritalInfo>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}