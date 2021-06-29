import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { CriticalIncidentRecognition } from './criticalIncidentRecognition';



@Injectable({ providedIn: 'root' })
export class CriticalIncidentRecognitionServiceCollection extends ServiceCollection<CriticalIncidentRecognition> {

  constructor(public API_Operation: API_Operation<CriticalIncidentRecognition>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}