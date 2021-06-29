import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { BehavioralAppraise } from '../../PMS/BehavioralAppraise/behavioralAppraise';
import { FunctionalAppraise } from '../../PMS/FunctionalAppraise/functionalAppraise';
import { QualitativeAppraise } from '../../PMS/QualitativeAppraise/qualitativeAppraise';


@Directive()
export class AppraiseTime extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = AppraiseTime.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base.PMS', 'AppraiseTime', 'Appraise Time');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfBehavioralAppraise: BehavioralAppraise[] = [];
	
	public listOfFunctionalAppraise: FunctionalAppraise[] = [];
	
	public listOfQualitativeAppraise: QualitativeAppraise[] = [];

  //#endregion

  
  public get SeekInstance(): AppraiseTime {
    return AppraiseTime.SeekInstance();
  }

  public static SeekInstance() : AppraiseTime {
    let appraiseTime: AppraiseTime = new AppraiseTime();
    appraiseTime.isActive = null;
    appraiseTime.ResetPaginate();
    return appraiseTime;
  }

  public static Validate(appraiseTime: AppraiseTime) : boolean {
    let result = Validator.Validate(appraiseTime.title);
    if(result === false)
      console.log('AppraiseTime is unvalid : ', appraiseTime);
    return result;
  }
}