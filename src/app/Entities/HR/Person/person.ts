import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
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
import { Gender } from '../../Base/Gender/gender';
import { City } from '../../Base/City/city';
import { Religion } from '../../Base/Religion/religion';
import { HealthStatus } from '../../Base/HealthStatus/healthStatus';
import { Country } from '../../Base/Country/country';
import { MaritalStatus } from '../../Base.HR/MaritalStatus/maritalStatus';


@Directive()
export class Person extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Person.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('HR', 'Person', 'Person');

  //endregion

  //#region Fields

	public nationalCode: string = '';
	
	public englishFirstName: string = '';
	
	public englishLastName: string = '';
	
	public englishNickName: string = '';
	
	public persianFirstName: string = '';
	
	public persianLastName: string = '';
	
	public persianNickName: string = '';
	
	public gender: Gender = new Gender();
	
	public englishFatherName: string = '';
	
	public persianFatherName: string = '';
	
	public documentedBirthDate: Date = new Date();
	
	public realBirthDate: Date = new Date();
	
	public birthCity: City = new City();
	
	public religion: Religion = new Religion();
	
	public healthStatus: HealthStatus = new HealthStatus();
	
	public nationality: Country = new Country();
	
	public birthCertificateNumber: string = '';
	
	public birthCertificateSerialNumber: string = '';
	
	public maritalStatus: MaritalStatus = new MaritalStatus();
	
	public childCount: number = 0;

  	public pictureUrl: string = '';

	//#endregion

  //#region Collection Properties

  public listOfResponsiblePerson_CoachingQuestionary: CoachingQuestionary[] = [];
	
	public listOfUserAccount: UserAccount[] = [];
	
	public listOfWorkExperience: WorkExperience[] = [];
	
	public listOfUniversityHistory: UniversityHistory[] = [];
	
	public listOfSchoolHistory: SchoolHistory[] = [];
	
	public listOfPeson_Relative: Relative[] = [];
	
	public listOfPersonDrivingLicense: PersonDrivingLicense[] = [];
	
	public listOfPersonConnection: PersonConnection[] = [];
	
	public listOfPersonCertificate: PersonCertificate[] = [];
	
	public listOfPassport: Passport[] = [];
	
	public listOfMilitaryService: MilitaryService[] = [];
	
	public listOfMaritalInfo: MaritalInfo[] = [];
	
	public listOfLanguageAbility: LanguageAbility[] = [];
	
	public listOfEmployee: Employee[] = [];
	
	public listOfHabitancy: Habitancy[] = [];
	
	public listOfImpersonate: Impersonate[] = [];
	
	public listOfLog: Log[] = [];

  //#endregion

  
  public get SeekInstance(): Person {
    return Person.SeekInstance();
  }

  public static SeekInstance() : Person {
    let person: Person = new Person();
    person.documentedBirthDate = null;
		person.realBirthDate = null;
    person.ResetPaginate();
    return person;
  }

  public static Validate(person: Person) : boolean {
    let result = Validator.Validate(person.nationalCode) &&
					Validator.Validate(person.englishFirstName) &&
					Validator.Validate(person.englishLastName) &&
					Validator.Validate(person.englishNickName) &&
					Validator.Validate(person.persianFirstName) &&
					Validator.Validate(person.persianLastName) &&
					Validator.Validate(person.persianNickName) &&
					Validator.Validate(person.gender) &&
					Validator.Validate(person.englishFatherName) &&
					Validator.Validate(person.persianFatherName) &&
					Validator.Validate(person.birthCity) &&
					Validator.Validate(person.religion) &&
					Validator.Validate(person.healthStatus) &&
					Validator.Validate(person.nationality) &&
					Validator.Validate(person.birthCertificateNumber) &&
					Validator.Validate(person.birthCertificateSerialNumber) &&
					Validator.Validate(person.maritalStatus);
    if(result === false)
      console.log('Person is unvalid : ', person);
    return result;
  }
}