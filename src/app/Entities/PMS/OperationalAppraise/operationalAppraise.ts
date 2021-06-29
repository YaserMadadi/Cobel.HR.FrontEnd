import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { TargetSetting } from '../TargetSetting/targetSetting';
import { Employee } from '../../HR/Employee/employee';
import { ScoreCell } from '../ScoreCell/scoreCell';


@Directive()
export class OperationalAppraise extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = OperationalAppraise.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'OperationalAppraise', 'Operational Appraise');

  //endregion

  //#region Fields

	public targetSetting: TargetSetting = new TargetSetting();
	
	public date: Date = new Date();
	
	public approver: Employee = new Employee();
	
	public quantitativeScore: number = 0;
	
	public qualitativeScore: number = 0;
	
	public totalScore: number = 0;
	
	public scoreCell: ScoreCell = new ScoreCell();
	
	public comment: string = '';

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): OperationalAppraise {
    return OperationalAppraise.SeekInstance();
  }

  public static SeekInstance() : OperationalAppraise {
    let operationalAppraise: OperationalAppraise = new OperationalAppraise();
    operationalAppraise.date = null;
    operationalAppraise.ResetPaginate();
    return operationalAppraise;
  }

  public static Validate(operationalAppraise: OperationalAppraise) : boolean {
    let result = Validator.Validate(operationalAppraise.targetSetting) &&
					Validator.Validate(operationalAppraise.approver) &&
					Validator.Validate(operationalAppraise.scoreCell);
    if(result === false)
      console.log('OperationalAppraise is unvalid : ', operationalAppraise);
    return result;
  }
}