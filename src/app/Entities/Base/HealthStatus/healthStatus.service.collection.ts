import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { HealthStatus } from './healthStatus';

import { Person } from '../../HR/Person/person';


@Injectable({ providedIn: 'root' })
export class HealthStatusServiceCollection extends ServiceCollection<HealthStatus> {

  constructor(public API_Operation: API_Operation<HealthStatus>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfPerson(healthStatus: HealthStatus, person: Person = Person.SeekInstance()): Promise<Person[]> {
    return super.CollectionOf<Person>(healthStatus, person);
  }

	//endregion
}