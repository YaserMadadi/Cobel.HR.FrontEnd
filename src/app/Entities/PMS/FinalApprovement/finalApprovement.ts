import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { TargetSetting } from '../TargetSetting/targetSetting';
import { Employee } from '../../HR/Employee/employee';


@Directive()
export class FinalApprovement extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = FinalApprovement.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'FinalApprovement', 'Final Approvement');

  //endregion

  //#region Fields

	public targetSetting: TargetSetting = new TargetSetting();
	
	public approver: Employee = new Employee();
	
	public date: Date = new Date();
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): FinalApprovement {
    return FinalApprovement.SeekInstance();
  }

  public static SeekInstance() : FinalApprovement {
    let finalApprovement: FinalApprovement = new FinalApprovement();
    finalApprovement.date = null;
		finalApprovement.isActive = null;
    finalApprovement.ResetPaginate();
    return finalApprovement;
  }

  public static Validate(finalApprovement: FinalApprovement) : boolean {
    let result = Validator.Validate(finalApprovement.targetSetting) &&
					Validator.Validate(finalApprovement.approver);
    if(result === false)
      console.log('FinalApprovement is unvalid : ', finalApprovement);
    return result;
  }
}