import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { TargetSetting } from '../../PMS/TargetSetting/targetSetting';
import { YearQuarter } from '../YearQuarter/yearQuarter';


@Directive()
export class Year extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Year.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base', 'Year', 'Year');

  //endregion

  //#region Fields

	public yearTitle: number = 0;
	
	public description: string = '';

	//#endregion

  //#region Collection Properties

  public listOfTargetSetting: TargetSetting[] = [];
	
	public listOfYearQuarter: YearQuarter[] = [];

  //#endregion

  
  public get SeekInstance(): Year {
    return Year.SeekInstance();
  }

  public static SeekInstance() : Year {
    let year: Year = new Year();
    // No Item...
    year.ResetPaginate();
    return year;
  }

  public static Validate(year: Year) : boolean {
    let result = true;
    // if(result === false)
    //   console.log('Year is unvalid : ', year);
    return result;
  }
}