import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { CriticalIncident } from './criticalIncident';

import { CriticalIncidentRecognition } from '../CriticalIncidentRecognition/criticalIncidentRecognition';


@Injectable({ providedIn: 'root' })
export class CriticalIncidentServiceCollection extends ServiceCollection<CriticalIncident> {

  constructor(public API_Operation: API_Operation<CriticalIncident>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfCriticalIncidentRecognition(criticalIncident: CriticalIncident, criticalIncidentRecognition: CriticalIncidentRecognition = CriticalIncidentRecognition.SeekInstance()): Promise<CriticalIncidentRecognition[]> {
    return super.CollectionOf<CriticalIncidentRecognition>(criticalIncident, criticalIncidentRecognition);
  }

	//endregion
}