import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Religion } from './religion';

import { Person } from '../../HR/Person/person';


@Injectable({ providedIn: 'root' })
export class ReligionServiceCollection extends ServiceCollection<Religion> {

  constructor(public API_Operation: API_Operation<Religion>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfPerson(religion: Religion, person: Person = Person.SeekInstance()): Promise<Person[]> {
    return super.CollectionOf<Person>(religion, person);
  }

	//endregion
}