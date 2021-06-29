import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { MaritalStatus } from './maritalStatus';

import { Person } from '../../HR/Person/person';


@Injectable({ providedIn: 'root' })
export class MaritalStatusServiceCollection extends ServiceCollection<MaritalStatus> {

  constructor(public API_Operation: API_Operation<MaritalStatus>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfPerson(maritalStatus: MaritalStatus, person: Person = Person.SeekInstance()): Promise<Person[]> {
    return super.CollectionOf<Person>(maritalStatus, person);
  }

	//endregion
}