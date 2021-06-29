import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { UniversityTerminate } from './universityTerminate';



@Injectable({ providedIn: 'root' })
export class UniversityTerminateServiceCollection extends ServiceCollection<UniversityTerminate> {

  constructor(public API_Operation: API_Operation<UniversityTerminate>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}