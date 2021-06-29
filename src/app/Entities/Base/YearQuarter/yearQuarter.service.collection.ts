import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { YearQuarter } from './yearQuarter';

import { AssessmentTraining } from '../../LAD/AssessmentTraining/assessmentTraining';


@Injectable({ providedIn: 'root' })
export class YearQuarterServiceCollection extends ServiceCollection<YearQuarter> {

  constructor(public API_Operation: API_Operation<YearQuarter>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfAssessmentTraining_DeadLine(deadLine: YearQuarter, assessmentTraining: AssessmentTraining = AssessmentTraining.SeekInstance()): Promise<AssessmentTraining[]> {
    return super.CollectionOf<AssessmentTraining>(deadLine, assessmentTraining, 'DeadLine');
  }

	//endregion
}