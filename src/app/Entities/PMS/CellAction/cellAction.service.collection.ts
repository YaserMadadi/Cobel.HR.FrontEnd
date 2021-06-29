import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { CellAction } from './cellAction';



@Injectable({ providedIn: 'root' })
export class CellActionServiceCollection extends ServiceCollection<CellAction> {

  constructor(public API_Operation: API_Operation<CellAction>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}