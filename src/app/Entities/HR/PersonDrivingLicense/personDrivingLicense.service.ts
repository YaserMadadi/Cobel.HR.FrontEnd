import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { PersonDrivingLicense } from './personDrivingLicense';
import { PersonDrivingLicenseServiceCollection } from './personDrivingLicense.service.collection';

import { PersonService } from '../Person/person.service';
import { DrivingLicenseTypeService } from '../../Base/DrivingLicenseType/drivingLicenseType.service';


@Injectable({ providedIn: 'root' })
export class PersonDrivingLicenseService extends Service<PersonDrivingLicense> implements IService<PersonDrivingLicense> {

  constructor(public ServiceCollection: PersonDrivingLicenseServiceCollection,
		public PersonService: PersonService,
		public DrivingLicenseTypeService: DrivingLicenseTypeService) {
    super(ServiceCollection.API_Operation, PersonDrivingLicense.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new PersonDrivingLicense();
}

  RetrieveById(id: number): Promise<PersonDrivingLicense> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<PersonDrivingLicense[]> {
    return super.RetrieveAll();
  }

  Save(personDrivingLicense: PersonDrivingLicense): Promise<PersonDrivingLicense> {
    if (!PersonDrivingLicense.Validate(personDrivingLicense)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(personDrivingLicense);
    }
    return super.Save(personDrivingLicense);
  }

  SaveAttached(personDrivingLicense: PersonDrivingLicense): Promise<PersonDrivingLicense> {
    if (!PersonDrivingLicense.Validate(personDrivingLicense)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(personDrivingLicense);
    }
    return super.SaveAttached(personDrivingLicense);
  }

  SaveCollection(personDrivingLicenseList: PersonDrivingLicense[]): Promise<Result> {
    return super.SaveCollection(personDrivingLicenseList);
  }

  Delete(personDrivingLicense: PersonDrivingLicense): Promise<boolean> {
    return super.Delete(personDrivingLicense);
  }

  Seek(personDrivingLicense: PersonDrivingLicense = PersonDrivingLicense.SeekInstance()): Promise<PersonDrivingLicense[]> {
    return super.Seek(personDrivingLicense);
  }

  SeekLast(personDrivingLicense: PersonDrivingLicense): Promise<PersonDrivingLicense> {
    return super.SeekLast(personDrivingLicense);
  }

  SeekByValue(value: string = ''): Promise<PersonDrivingLicense[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}