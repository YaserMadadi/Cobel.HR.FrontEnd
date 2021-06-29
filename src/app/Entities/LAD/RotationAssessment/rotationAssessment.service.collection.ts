import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { RotationAssessment } from './rotationAssessment';



@Injectable({ providedIn: 'root' })
export class RotationAssessmentServiceCollection extends ServiceCollection<RotationAssessment> {

  constructor(public API_Operation: API_Operation<RotationAssessment>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}