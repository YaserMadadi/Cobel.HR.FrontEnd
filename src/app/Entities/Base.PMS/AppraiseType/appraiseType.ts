import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { BehavioralAppraise } from '../../PMS/BehavioralAppraise/behavioralAppraise';
import { FunctionalAppraise } from '../../PMS/FunctionalAppraise/functionalAppraise';
import { QualitativeAppraise } from '../../PMS/QualitativeAppraise/qualitativeAppraise';


@Directive()
export class AppraiseType extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = AppraiseType.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base.PMS', 'AppraiseType', 'Appraise Type');

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

  
  public get SeekInstance(): AppraiseType {
    return AppraiseType.SeekInstance();
  }

  public static SeekInstance() : AppraiseType {
    let appraiseType: AppraiseType = new AppraiseType();
    appraiseType.isActive = null;
    appraiseType.ResetPaginate();
    return appraiseType;
  }

  public static Validate(appraiseType: AppraiseType) : boolean {
    let result = Validator.Validate(appraiseType.title);
    if(result === false)
      console.log('AppraiseType is unvalid : ', appraiseType);
    return result;
  }
}