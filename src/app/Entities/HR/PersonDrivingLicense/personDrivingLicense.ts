import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Person } from '../Person/person';
import { DrivingLicenseType } from '../../Base/DrivingLicenseType/drivingLicenseType';


@Directive()
export class PersonDrivingLicense extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = PersonDrivingLicense.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('HR', 'PersonDrivingLicense', 'Person Driving License');

  //endregion

  //#region Fields

	public person: Person = new Person();
	
	public drivingLicenseType: DrivingLicenseType = new DrivingLicenseType();
	
	public expireDate: Date = new Date();

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): PersonDrivingLicense {
    return PersonDrivingLicense.SeekInstance();
  }

  public static SeekInstance() : PersonDrivingLicense {
    let personDrivingLicense: PersonDrivingLicense = new PersonDrivingLicense();
    personDrivingLicense.expireDate = null;
    personDrivingLicense.ResetPaginate();
    return personDrivingLicense;
  }

  public static Validate(personDrivingLicense: PersonDrivingLicense) : boolean {
    let result = Validator.Validate(personDrivingLicense.person) &&
					Validator.Validate(personDrivingLicense.drivingLicenseType);
    if(result === false)
      console.log('PersonDrivingLicense is unvalid : ', personDrivingLicense);
    return result;
  }
}