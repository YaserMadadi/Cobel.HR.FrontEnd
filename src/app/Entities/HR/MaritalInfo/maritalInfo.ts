import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Person } from '../Person/person';


@Directive()
export class MaritalInfo extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = MaritalInfo.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('HR', 'MaritalInfo', 'Marital Info');

  //endregion

  //#region Fields

	public person: Person = new Person();
	
	public marriageDate: Date = new Date();

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): MaritalInfo {
    return MaritalInfo.SeekInstance();
  }

  public static SeekInstance() : MaritalInfo {
    let maritalInfo: MaritalInfo = new MaritalInfo();
    maritalInfo.marriageDate = null;
    maritalInfo.ResetPaginate();
    return maritalInfo;
  }

  public static Validate(maritalInfo: MaritalInfo) : boolean {
    let result = Validator.Validate(maritalInfo.person);
    if(result === false)
      console.log('MaritalInfo is unvalid : ', maritalInfo);
    return result;
  }
}