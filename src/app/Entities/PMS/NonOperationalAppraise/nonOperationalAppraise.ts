import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { TargetSetting } from '../TargetSetting/targetSetting';
import { Employee } from '../../HR/Employee/employee';
import { ScoreCell } from '../ScoreCell/scoreCell';


@Directive()
export class NonOperationalAppraise extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = NonOperationalAppraise.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'NonOperationalAppraise', 'Non Operational Appraise');

  //endregion

  //#region Fields

	public targetSetting: TargetSetting = new TargetSetting();
	
	public date: Date = new Date();
	
	public approver: Employee = new Employee();
	
	public functionalScore: number = 0;
	
	public behavioralScore: number = 0;
	
	public totalScore: number = 0;
	
	public scoreCell: ScoreCell = new ScoreCell();
	
	public comment: string = '';

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): NonOperationalAppraise {
    return NonOperationalAppraise.SeekInstance();
  }

  public static SeekInstance() : NonOperationalAppraise {
    let nonOperationalAppraise: NonOperationalAppraise = new NonOperationalAppraise();
    nonOperationalAppraise.date = null;
    nonOperationalAppraise.ResetPaginate();
    return nonOperationalAppraise;
  }

  public static Validate(nonOperationalAppraise: NonOperationalAppraise) : boolean {
    let result = Validator.Validate(nonOperationalAppraise.targetSetting) &&
					Validator.Validate(nonOperationalAppraise.approver) &&
					Validator.Validate(nonOperationalAppraise.scoreCell);
    if(result === false)
      console.log('NonOperationalAppraise is unvalid : ', nonOperationalAppraise);
    return result;
  }
}