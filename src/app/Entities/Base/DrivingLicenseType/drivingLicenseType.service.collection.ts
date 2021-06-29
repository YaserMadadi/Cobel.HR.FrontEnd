import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { DrivingLicenseType } from './drivingLicenseType';

import { PersonDrivingLicense } from '../../HR/PersonDrivingLicense/personDrivingLicense';


@Injectable({ providedIn: 'root' })
export class DrivingLicenseTypeServiceCollection extends ServiceCollection<DrivingLicenseType> {

  constructor(public API_Operation: API_Operation<DrivingLicenseType>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfPersonDrivingLicense(drivingLicenseType: DrivingLicenseType, personDrivingLicense: PersonDrivingLicense = PersonDrivingLicense.SeekInstance()): Promise<PersonDrivingLicense[]> {
    return super.CollectionOf<PersonDrivingLicense>(drivingLicenseType, personDrivingLicense);
  }

	//endregion
}