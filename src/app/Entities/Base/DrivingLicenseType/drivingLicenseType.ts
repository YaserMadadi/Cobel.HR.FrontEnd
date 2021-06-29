import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { PersonDrivingLicense } from '../../HR/PersonDrivingLicense/personDrivingLicense';


@Directive()
export class DrivingLicenseType extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = DrivingLicenseType.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base', 'DrivingLicenseType', 'Driving License Type');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfPersonDrivingLicense: PersonDrivingLicense[] = [];

  //#endregion

  
  public get SeekInstance(): DrivingLicenseType {
    return DrivingLicenseType.SeekInstance();
  }

  public static SeekInstance() : DrivingLicenseType {
    let drivingLicenseType: DrivingLicenseType = new DrivingLicenseType();
    drivingLicenseType.isActive = null;
    drivingLicenseType.ResetPaginate();
    return drivingLicenseType;
  }

  public static Validate(drivingLicenseType: DrivingLicenseType) : boolean {
    let result = Validator.Validate(drivingLicenseType.title);
    if(result === false)
      console.log('DrivingLicenseType is unvalid : ', drivingLicenseType);
    return result;
  }
}