import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { CoachConnectionLine } from './coachConnectionLine';



@Injectable({ providedIn: 'root' })
export class CoachConnectionLineServiceCollection extends ServiceCollection<CoachConnectionLine> {

  constructor(public API_Operation: API_Operation<CoachConnectionLine>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}