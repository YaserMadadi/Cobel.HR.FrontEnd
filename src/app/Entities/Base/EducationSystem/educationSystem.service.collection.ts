import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { EducationSystem } from './educationSystem';

import { UniversityHistory } from '../../HR/UniversityHistory/universityHistory';


@Injectable({ providedIn: 'root' })
export class EducationSystemServiceCollection extends ServiceCollection<EducationSystem> {

  constructor(public API_Operation: API_Operation<EducationSystem>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfUniversityHistory(educationSystem: EducationSystem, universityHistory: UniversityHistory = UniversityHistory.SeekInstance()): Promise<UniversityHistory[]> {
    return super.CollectionOf<UniversityHistory>(educationSystem, universityHistory);
  }

	//endregion
}