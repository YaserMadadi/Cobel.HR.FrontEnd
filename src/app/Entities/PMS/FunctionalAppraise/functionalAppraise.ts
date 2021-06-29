import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { FunctionalKPI } from '../FunctionalKPI/functionalKPI';
import { Employee } from '../../HR/Employee/employee';
import { AppraiseType } from '../../Base.PMS/AppraiseType/appraiseType';
import { AppraiseTime } from '../../Base.PMS/AppraiseTime/appraiseTime';


@Directive()
export class FunctionalAppraise extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = FunctionalAppraise.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'FunctionalAppraise', 'Functional Appraise');

  //endregion

  //#region Fields

	public functionalKPI: FunctionalKPI = new FunctionalKPI();
	
	public date: Date = new Date();
	
	public appraiser: Employee = new Employee();
	
	public appraiseType: AppraiseType = new AppraiseType();
	
	public appraiseTime: AppraiseTime = new AppraiseTime();
	
	public actualValue: number = 0;
	
	public score: number = 0;
	
	public comment: string = '';

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): FunctionalAppraise {
    return FunctionalAppraise.SeekInstance();
  }

  public static SeekInstance() : FunctionalAppraise {
    let functionalAppraise: FunctionalAppraise = new FunctionalAppraise();
    functionalAppraise.date = null;
    functionalAppraise.ResetPaginate();
    return functionalAppraise;
  }

  public static Validate(functionalAppraise: FunctionalAppraise) : boolean {
    let result = Validator.Validate(functionalAppraise.functionalKPI) &&
					Validator.Validate(functionalAppraise.appraiser) &&
					Validator.Validate(functionalAppraise.appraiseType) &&
					Validator.Validate(functionalAppraise.appraiseTime);
    if(result === false)
      console.log('FunctionalAppraise is unvalid : ', functionalAppraise);
    return result;
  }
}