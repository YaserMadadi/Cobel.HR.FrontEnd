import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { AssessmentTraining } from '../../LAD/AssessmentTraining/assessmentTraining';
import { Year } from '../Year/year';
import { Quarter } from '../Quarter/quarter';


@Directive()
export class YearQuarter extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = YearQuarter.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base', 'YearQuarter', 'Year Quarter');

  //endregion

  //#region Fields

	public title: string = '';
	
	public year: Year = new Year();
	
	public quarter: Quarter = new Quarter();

	//#endregion

  //#region Collection Properties

  public listOfDeadLine_AssessmentTraining: AssessmentTraining[] = [];

  //#endregion

  
  public get SeekInstance(): YearQuarter {
    return YearQuarter.SeekInstance();
  }

  public static SeekInstance() : YearQuarter {
    let yearQuarter: YearQuarter = new YearQuarter();
    // No Item...
    yearQuarter.ResetPaginate();
    return yearQuarter;
  }

  public static Validate(yearQuarter: YearQuarter) : boolean {
    let result = Validator.Validate(yearQuarter.title) &&
					Validator.Validate(yearQuarter.year) &&
					Validator.Validate(yearQuarter.quarter);
    if(result === false)
      console.log('YearQuarter is unvalid : ', yearQuarter);
    return result;
  }
}