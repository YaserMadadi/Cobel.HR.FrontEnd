import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { SchoolLevel } from './schoolLevel';

import { SchoolHistory } from '../../HR/SchoolHistory/schoolHistory';


@Injectable({ providedIn: 'root' })
export class SchoolLevelServiceCollection extends ServiceCollection<SchoolLevel> {

  constructor(public API_Operation: API_Operation<SchoolLevel>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfSchoolHistory(schoolLevel: SchoolLevel, schoolHistory: SchoolHistory = SchoolHistory.SeekInstance()): Promise<SchoolHistory[]> {
    return super.CollectionOf<SchoolHistory>(schoolLevel, schoolHistory);
  }

	//endregion
}