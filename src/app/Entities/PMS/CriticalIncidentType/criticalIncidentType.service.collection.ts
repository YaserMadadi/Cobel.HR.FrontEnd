import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { CriticalIncidentType } from './criticalIncidentType';

import { CriticalIncident } from '../CriticalIncident/criticalIncident';


@Injectable({ providedIn: 'root' })
export class CriticalIncidentTypeServiceCollection extends ServiceCollection<CriticalIncidentType> {

  constructor(public API_Operation: API_Operation<CriticalIncidentType>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfCriticalIncident(criticalIncidentType: CriticalIncidentType, criticalIncident: CriticalIncident = CriticalIncident.SeekInstance()): Promise<CriticalIncident[]> {
    return super.CollectionOf<CriticalIncident>(criticalIncidentType, criticalIncident);
  }

	//endregion
}