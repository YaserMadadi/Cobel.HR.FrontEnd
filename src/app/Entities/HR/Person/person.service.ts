import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Person } from './person';
import { PersonServiceCollection } from './person.service.collection';

import { GenderService } from '../../Base/Gender/gender.service';
import { CityService } from '../../Base/City/city.service';
import { ReligionService } from '../../Base/Religion/religion.service';
import { HealthStatusService } from '../../Base/HealthStatus/healthStatus.service';
import { CountryService } from '../../Base/Country/country.service';
import { MaritalStatusService } from '../../Base.HR/MaritalStatus/maritalStatus.service';
import { CoachingQuestionary } from '../../LAD/CoachingQuestionary/coachingQuestionary';
import { UserAccount } from '../../Core/UserAccount/userAccount';
import { WorkExperience } from '../WorkExperience/workExperience';
import { UniversityHistory } from '../UniversityHistory/universityHistory';
import { SchoolHistory } from '../SchoolHistory/schoolHistory';
import { Relative } from '../Relative/relative';
import { PersonDrivingLicense } from '../PersonDrivingLicense/personDrivingLicense';
import { PersonConnection } from '../PersonConnection/personConnection';
import { PersonCertificate } from '../PersonCertificate/personCertificate';
import { Passport } from '../Passport/passport';
import { MilitaryService } from '../MilitaryService/militaryService';
import { MaritalInfo } from '../MaritalInfo/maritalInfo';
import { LanguageAbility } from '../LanguageAbility/languageAbility';
import { Employee } from '../Employee/employee';
import { Habitancy } from '../Habitancy/habitancy';
import { Impersonate } from '../../Core/Impersonate/impersonate';
import { Log } from '../../Core/Log/log';


@Injectable({ providedIn: 'root' })
export class PersonService extends Service<Person> implements IService<Person> {

  constructor(public ServiceCollection: PersonServiceCollection,
		public GenderService: GenderService,
		public CityService: CityService,
		public ReligionService: ReligionService,
		public HealthStatusService: HealthStatusService,
		public CountryService: CountryService,
		public MaritalStatusService: MaritalStatusService) {
    super(ServiceCollection.API_Operation, Person.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new Person();
}

  RetrieveById(id: number): Promise<Person> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Person[]> {
    return super.RetrieveAll();
  }

  Save(person: Person): Promise<Person> {
    if (!Person.Validate(person)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(person);
    }
    return super.Save(person);
  }

  SaveAttached(person: Person): Promise<Person> {
    if (!Person.Validate(person)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(person);
    }
    return super.SaveAttached(person);
  }

  SaveCollection(personList: Person[]): Promise<Result> {
    return super.SaveCollection(personList);
  }

  Delete(person: Person): Promise<boolean> {
    return super.Delete(person);
  }

  Seek(person: Person = Person.SeekInstance()): Promise<Person[]> {
    return super.Seek(person);
  }

  SeekLast(person: Person): Promise<Person> {
    return super.SeekLast(person);
  }

  SeekByValue(value: string = ''): Promise<Person[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}