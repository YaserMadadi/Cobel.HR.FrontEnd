import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { PersonDrivingLicense } from './personDrivingLicense';



@Injectable({ providedIn: 'root' })
export class PersonDrivingLicenseServiceCollection extends ServiceCollection<PersonDrivingLicense> {

  constructor(public API_Operation: API_Operation<PersonDrivingLicense>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}