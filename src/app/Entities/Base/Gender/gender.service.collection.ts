import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Gender } from './gender';

import { Person } from '../../HR/Person/person';
import { Coach } from '../../LAD/Coach/coach';
import { Assessor } from '../../LAD/Assessor/assessor';


@Injectable({ providedIn: 'root' })
export class GenderServiceCollection extends ServiceCollection<Gender> {

  constructor(public API_Operation: API_Operation<Gender>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfAssessor(gender: Gender, assessor: Assessor = Assessor.SeekInstance()): Promise<Assessor[]> {
    return super.CollectionOf<Assessor>(gender, assessor);
  }

  CollectionOfCoach(gender: Gender, coach: Coach = Coach.SeekInstance()): Promise<Coach[]> {
    return super.CollectionOf<Coach>(gender, coach);
  }

  CollectionOfPerson(gender: Gender, person: Person = Person.SeekInstance()): Promise<Person[]> {
    return super.CollectionOf<Person>(gender, person);
  }

	//endregion
}