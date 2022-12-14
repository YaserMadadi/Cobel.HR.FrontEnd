import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { TargetSetting } from '../TargetSetting/targetSetting';
import { AppraiseType } from '../../Base.PMS/AppraiseType/appraiseType';
import { ScoreCell } from '../ScoreCell/scoreCell';


@Directive()
export class AppraiseResult extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = AppraiseResult.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'AppraiseResult', 'Appraise Result');

  //endregion

  //#region Fields

	public targetSetting: TargetSetting = new TargetSetting();
	
	public appraiseType: AppraiseType = new AppraiseType();
	
	public functionalScore: number = 0;
	
	public behavioralScore: number = 0;
	
  public quantitativeScore: number = 0;

  public qualitativeScore: number = 0;

	public totalScore: number = 0;

  public scoreCell: ScoreCell = new ScoreCell();

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): AppraiseResult {
    return AppraiseResult.SeekInstance();
  }

  public static SeekInstance() : AppraiseResult {
    let appraiseResult: AppraiseResult = new AppraiseResult();
    // No Item...
    appraiseResult.ResetPaginate();
    return appraiseResult;
  }

  public static Validate(appraiseResult: AppraiseResult) : boolean {
    let result = Validator.Validate(appraiseResult.targetSetting) &&
					Validator.Validate(appraiseResult.appraiseType);
    if(result === false)
      console.log('AppraiseResult is unvalid : ', appraiseResult);
    return result;
  }
}