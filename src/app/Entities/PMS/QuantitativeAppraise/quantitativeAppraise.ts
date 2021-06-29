import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { TargetSetting } from '../TargetSetting/targetSetting';


@Directive()
export class QuantitativeAppraise extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = QuantitativeAppraise.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'QuantitativeAppraise', 'Quantitative Appraise');

  //endregion

  //#region Fields

	public targetSetting: TargetSetting = new TargetSetting();
	
	public score: number = 0;
	
	public comment: string = '';

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): QuantitativeAppraise {
    return QuantitativeAppraise.SeekInstance();
  }

  public static SeekInstance() : QuantitativeAppraise {
    let quantitativeAppraise: QuantitativeAppraise = new QuantitativeAppraise();
    // No Item...
    quantitativeAppraise.ResetPaginate();
    return quantitativeAppraise;
  }

  public static Validate(quantitativeAppraise: QuantitativeAppraise) : boolean {
    let result = Validator.Validate(quantitativeAppraise.targetSetting);
    if(result === false)
      console.log('QuantitativeAppraise is unvalid : ', quantitativeAppraise);
    return result;
  }
}