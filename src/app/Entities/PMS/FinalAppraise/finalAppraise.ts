import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { TargetSetting } from '../TargetSetting/targetSetting';
import { ScoreCell } from '../ScoreCell/scoreCell';


@Directive()
export class FinalAppraise extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = FinalAppraise.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'FinalAppraise', 'FinalAppraise');

  //endregion

  //#region Fields

	public targetSetting: TargetSetting = new TargetSetting();
	
	public managerFunctionalScore: number = 0;
	
	public managerBehavioralScore: number = 0;
	
	public finalFunctionalScore: number = 0;
	
	public finalBehavioralScore: number = 0;
	
	public comment: string = '';
	
	public isApproved: boolean = false;

  public scoreCell: ScoreCell = new ScoreCell();

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): FinalAppraise {
    return FinalAppraise.SeekInstance();
  }

  public static SeekInstance() : FinalAppraise {
    let finalAppraise: FinalAppraise = new FinalAppraise();
    finalAppraise.isApproved = null;
    finalAppraise.ResetPaginate();
    return finalAppraise;
  }

  public static Validate(finalAppraise: FinalAppraise) : boolean {
    let result = Validator.Validate(finalAppraise.targetSetting);
    if(result === false)
      console.log('FinalAppraise is unvalid : ', finalAppraise);
    return result;
  }
}


