import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Assessor } from './assessor';

import { AssessorConnectionLine } from '../AssessorConnectionLine/assessorConnectionLine';
import { Assessment } from '../Assessment/assessment';


@Injectable({ providedIn: 'root' })
export class AssessorServiceCollection extends ServiceCollection<Assessor> {

  constructor(public API_Operation: API_Operation<Assessor>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfAssessment(assessor: Assessor, assessment: Assessment = Assessment.SeekInstance()): Promise<Assessment[]> {
    return super.CollectionOf<Assessment>(assessor, assessment);
  }

  CollectionOfAssessorConnectionLine(assessor: Assessor, assessorConnectionLine: AssessorConnectionLine = AssessorConnectionLine.SeekInstance()): Promise<AssessorConnectionLine[]> {
    return super.CollectionOf<AssessorConnectionLine>(assessor, assessorConnectionLine);
  }

	//endregion
}