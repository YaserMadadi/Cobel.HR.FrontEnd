import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { AssessmentType } from './assessmentType';

import { Assessment } from '../Assessment/assessment';


@Injectable({ providedIn: 'root' })
export class AssessmentTypeServiceCollection extends ServiceCollection<AssessmentType> {

  constructor(public API_Operation: API_Operation<AssessmentType>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfAssessment(assessmentType: AssessmentType, assessment: Assessment = Assessment.SeekInstance()): Promise<Assessment[]> {
    return super.CollectionOf<Assessment>(assessmentType, assessment);
  }

	//endregion
}