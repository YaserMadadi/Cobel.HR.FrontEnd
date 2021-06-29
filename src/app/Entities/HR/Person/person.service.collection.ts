import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Person } from './person';

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
export class PersonServiceCollection extends ServiceCollection<Person> {

  constructor(public API_Operation: API_Operation<Person>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfCoachingQuestionary_ResponsiblePerson(responsiblePerson: Person, coachingQuestionary: CoachingQuestionary = CoachingQuestionary.SeekInstance()): Promise<CoachingQuestionary[]> {
    return super.CollectionOf<CoachingQuestionary>(responsiblePerson, coachingQuestionary, 'ResponsiblePerson');
  }

  CollectionOfEmployee(person: Person, employee: Employee = Employee.SeekInstance()): Promise<Employee[]> {
    return super.CollectionOf<Employee>(person, employee);
  }

  CollectionOfHabitancy(person: Person, habitancy: Habitancy = Habitancy.SeekInstance()): Promise<Habitancy[]> {
    return super.CollectionOf<Habitancy>(person, habitancy);
  }

  CollectionOfImpersonate(person: Person, impersonate: Impersonate = Impersonate.SeekInstance()): Promise<Impersonate[]> {
    return super.CollectionOf<Impersonate>(person, impersonate);
  }

  CollectionOfLanguageAbility(person: Person, languageAbility: LanguageAbility = LanguageAbility.SeekInstance()): Promise<LanguageAbility[]> {
    return super.CollectionOf<LanguageAbility>(person, languageAbility);
  }

  CollectionOfLog(person: Person, log: Log = Log.SeekInstance()): Promise<Log[]> {
    return super.CollectionOf<Log>(person, log);
  }

  CollectionOfMaritalInfo(person: Person, maritalInfo: MaritalInfo = MaritalInfo.SeekInstance()): Promise<MaritalInfo[]> {
    return super.CollectionOf<MaritalInfo>(person, maritalInfo);
  }

  CollectionOfMilitaryService(person: Person, militaryService: MilitaryService = MilitaryService.SeekInstance()): Promise<MilitaryService[]> {
    return super.CollectionOf<MilitaryService>(person, militaryService);
  }

  CollectionOfPassport(person: Person, passport: Passport = Passport.SeekInstance()): Promise<Passport[]> {
    return super.CollectionOf<Passport>(person, passport);
  }

  CollectionOfPersonCertificate(person: Person, personCertificate: PersonCertificate = PersonCertificate.SeekInstance()): Promise<PersonCertificate[]> {
    return super.CollectionOf<PersonCertificate>(person, personCertificate);
  }

  CollectionOfPersonConnection(person: Person, personConnection: PersonConnection = PersonConnection.SeekInstance()): Promise<PersonConnection[]> {
    return super.CollectionOf<PersonConnection>(person, personConnection);
  }

  CollectionOfPersonDrivingLicense(person: Person, personDrivingLicense: PersonDrivingLicense = PersonDrivingLicense.SeekInstance()): Promise<PersonDrivingLicense[]> {
    return super.CollectionOf<PersonDrivingLicense>(person, personDrivingLicense);
  }

  CollectionOfRelative_Peson(peson: Person, relative: Relative = Relative.SeekInstance()): Promise<Relative[]> {
    return super.CollectionOf<Relative>(peson, relative, 'Peson');
  }

  CollectionOfSchoolHistory(person: Person, schoolHistory: SchoolHistory = SchoolHistory.SeekInstance()): Promise<SchoolHistory[]> {
    return super.CollectionOf<SchoolHistory>(person, schoolHistory);
  }

  CollectionOfUniversityHistory(person: Person, universityHistory: UniversityHistory = UniversityHistory.SeekInstance()): Promise<UniversityHistory[]> {
    return super.CollectionOf<UniversityHistory>(person, universityHistory);
  }

  CollectionOfUserAccount(person: Person, userAccount: UserAccount = UserAccount.SeekInstance()): Promise<UserAccount[]> {
    return super.CollectionOf<UserAccount>(person, userAccount);
  }

  CollectionOfWorkExperience(person: Person, workExperience: WorkExperience = WorkExperience.SeekInstance()): Promise<WorkExperience[]> {
    return super.CollectionOf<WorkExperience>(person, workExperience);
  }

	//endregion
}