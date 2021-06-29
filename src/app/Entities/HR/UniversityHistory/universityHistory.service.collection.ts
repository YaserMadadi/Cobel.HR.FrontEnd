import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { UniversityHistory } from './universityHistory';

import { UniversityTerminate } from '../UniversityTerminate/universityTerminate';


@Injectable({ providedIn: 'root' })
export class UniversityHistoryServiceCollection extends ServiceCollection<UniversityHistory> {

  constructor(public API_Operation: API_Operation<UniversityHistory>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfUniversityTerminate(universityHistory: UniversityHistory, universityTerminate: UniversityTerminate = UniversityTerminate.SeekInstance()): Promise<UniversityTerminate[]> {
    return super.CollectionOf<UniversityTerminate>(universityHistory, universityTerminate);
  }

	//endregion
}