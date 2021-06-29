import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Country } from './country';

import { Person } from '../../HR/Person/person';


@Injectable({ providedIn: 'root' })
export class CountryServiceCollection extends ServiceCollection<Country> {

  constructor(public API_Operation: API_Operation<Country>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfPerson_Nationality(nationality: Country, person: Person = Person.SeekInstance()): Promise<Person[]> {
    return super.CollectionOf<Person>(nationality, person, 'Nationality');
  }

	//endregion
}