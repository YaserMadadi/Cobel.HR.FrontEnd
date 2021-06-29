import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { UniversityDegree } from './universityDegree';

import { UniversityHistory } from '../../HR/UniversityHistory/universityHistory';


@Injectable({ providedIn: 'root' })
export class UniversityDegreeServiceCollection extends ServiceCollection<UniversityDegree> {

  constructor(public API_Operation: API_Operation<UniversityDegree>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfUniversityHistory(universityDegree: UniversityDegree, universityHistory: UniversityHistory = UniversityHistory.SeekInstance()): Promise<UniversityHistory[]> {
    return super.CollectionOf<UniversityHistory>(universityDegree, universityHistory);
  }

	//endregion
}