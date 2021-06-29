import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Conclusion } from './conclusion';



@Injectable({ providedIn: 'root' })
export class ConclusionServiceCollection extends ServiceCollection<Conclusion> {

  constructor(public API_Operation: API_Operation<Conclusion>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}