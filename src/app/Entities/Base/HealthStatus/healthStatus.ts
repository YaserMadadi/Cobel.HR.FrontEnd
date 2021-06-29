import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Person } from '../../HR/Person/person';


@Directive()
export class HealthStatus extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = HealthStatus.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base', 'HealthStatus', 'Health Status');

  //endregion

  //#region Fields

	public englishTitle: string = '';
	
	public persianTitle: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfPerson: Person[] = [];

  //#endregion

  
  public get SeekInstance(): HealthStatus {
    return HealthStatus.SeekInstance();
  }

  public static SeekInstance() : HealthStatus {
    let healthStatus: HealthStatus = new HealthStatus();
    healthStatus.isActive = null;
    healthStatus.ResetPaginate();
    return healthStatus;
  }

  public static Validate(healthStatus: HealthStatus) : boolean {
    let result = Validator.Validate(healthStatus.englishTitle) &&
					Validator.Validate(healthStatus.persianTitle);
    if(result === false)
      console.log('HealthStatus is unvalid : ', healthStatus);
    return result;
  }
}