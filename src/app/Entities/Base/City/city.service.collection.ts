import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { City } from './city';

import { Person } from '../../HR/Person/person';
import { Habitancy } from '../../HR/Habitancy/habitancy';
import { University } from '../University/university';


@Injectable({ providedIn: 'root' })
export class CityServiceCollection extends ServiceCollection<City> {

  constructor(public API_Operation: API_Operation<City>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfHabitancy(city: City, habitancy: Habitancy = Habitancy.SeekInstance()): Promise<Habitancy[]> {
    return super.CollectionOf<Habitancy>(city, habitancy);
  }

  CollectionOfPerson_BirthCity(birthCity: City, person: Person = Person.SeekInstance()): Promise<Person[]> {
    return super.CollectionOf<Person>(birthCity, person, 'BirthCity');
  }

  CollectionOfUniversity(city: City, university: University = University.SeekInstance()): Promise<University[]> {
    return super.CollectionOf<University>(city, university);
  }

	//endregion
}