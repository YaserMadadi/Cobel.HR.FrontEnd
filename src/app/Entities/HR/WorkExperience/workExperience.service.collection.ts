import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { WorkExperience } from './workExperience';



@Injectable({ providedIn: 'root' })
export class WorkExperienceServiceCollection extends ServiceCollection<WorkExperience> {

  constructor(public API_Operation: API_Operation<WorkExperience>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}