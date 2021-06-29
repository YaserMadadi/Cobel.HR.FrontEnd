import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { FieldOfStudy } from './fieldOfStudy';

import { UniversityHistory } from '../../HR/UniversityHistory/universityHistory';


@Injectable({ providedIn: 'root' })
export class FieldOfStudyServiceCollection extends ServiceCollection<FieldOfStudy> {

  constructor(public API_Operation: API_Operation<FieldOfStudy>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfUniversityHistory(fieldOfStudy: FieldOfStudy, universityHistory: UniversityHistory = UniversityHistory.SeekInstance()): Promise<UniversityHistory[]> {
    return super.CollectionOf<UniversityHistory>(fieldOfStudy, universityHistory);
  }

	//endregion
}