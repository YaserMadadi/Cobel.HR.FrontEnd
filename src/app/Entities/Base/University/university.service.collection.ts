import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { University } from './university';

import { UniversityHistory } from '../../HR/UniversityHistory/universityHistory';


@Injectable({ providedIn: 'root' })
export class UniversityServiceCollection extends ServiceCollection<University> {

  constructor(public API_Operation: API_Operation<University>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfUniversityHistory(university: University, universityHistory: UniversityHistory = UniversityHistory.SeekInstance()): Promise<UniversityHistory[]> {
    return super.CollectionOf<UniversityHistory>(university, universityHistory);
  }

	//endregion
}