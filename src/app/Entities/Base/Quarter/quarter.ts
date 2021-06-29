import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { YearQuarter } from '../YearQuarter/yearQuarter';


@Directive()
export class Quarter extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Quarter.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base', 'Quarter', 'Quarter');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfYearQuarter: YearQuarter[] = [];

  //#endregion

  
  public get SeekInstance(): Quarter {
    return Quarter.SeekInstance();
  }

  public static SeekInstance() : Quarter {
    let quarter: Quarter = new Quarter();
    quarter.isActive = null;
    quarter.ResetPaginate();
    return quarter;
  }

  public static Validate(quarter: Quarter) : boolean {
    let result = Validator.Validate(quarter.title);
    if(result === false)
      console.log('Quarter is unvalid : ', quarter);
    return result;
  }
}