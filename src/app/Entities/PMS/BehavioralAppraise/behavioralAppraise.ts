import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { BehavioralKPI } from '../BehavioralKPI/behavioralKPI';
import { AppraiseType } from '../../Base.PMS/AppraiseType/appraiseType';
import { AppraiseTime } from '../../Base.PMS/AppraiseTime/appraiseTime';
import { Employee } from '../../HR/Employee/employee';


@Directive()
export class BehavioralAppraise extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = BehavioralAppraise.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'BehavioralAppraise', 'Behavioral Appraise');

  //endregion

  //#region Fields

	public behavioralKPI: BehavioralKPI = new BehavioralKPI();
	
	public appraiseType: AppraiseType = new AppraiseType();
	
	public date: Date = new Date();
	
	public appraiser: Employee = new Employee();
	
	public score: number = 0;
	
	public comment: string = '';

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): BehavioralAppraise {
    return BehavioralAppraise.SeekInstance();
  }

  public static SeekInstance() : BehavioralAppraise {
    let behavioralAppraise: BehavioralAppraise = new BehavioralAppraise();
    behavioralAppraise.date = null;
    behavioralAppraise.ResetPaginate();
    return behavioralAppraise;
  }

  public static Validate(behavioralAppraise: BehavioralAppraise) : boolean {
    let result = Validator.Validate(behavioralAppraise.behavioralKPI) &&
					Validator.Validate(behavioralAppraise.appraiseType) &&
					Validator.Validate(behavioralAppraise.appraiser);
    if(result === false)
      console.log('BehavioralAppraise is unvalid : ', behavioralAppraise);
    return result;
  }
}