import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { AssessorConnectionLine } from './assessorConnectionLine';



@Injectable({ providedIn: 'root' })
export class AssessorConnectionLineServiceCollection extends ServiceCollection<AssessorConnectionLine> {

  constructor(public API_Operation: API_Operation<AssessorConnectionLine>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}