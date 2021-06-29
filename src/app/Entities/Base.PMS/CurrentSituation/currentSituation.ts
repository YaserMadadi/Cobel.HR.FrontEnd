import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { IndividualDevelopmentPlan } from '../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan';


@Directive()
export class CurrentSituation extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = CurrentSituation.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base.PMS', 'CurrentSituation', 'Current Situation');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfIndividualDevelopmentPlan: IndividualDevelopmentPlan[] = [];

  //#endregion

  
  public get SeekInstance(): CurrentSituation {
    return CurrentSituation.SeekInstance();
  }

  public static SeekInstance() : CurrentSituation {
    let currentSituation: CurrentSituation = new CurrentSituation();
    currentSituation.isActive = null;
    currentSituation.ResetPaginate();
    return currentSituation;
  }

  public static Validate(currentSituation: CurrentSituation) : boolean {
    let result = Validator.Validate(currentSituation.title);
    if(result === false)
      console.log('CurrentSituation is unvalid : ', currentSituation);
    return result;
  }
}