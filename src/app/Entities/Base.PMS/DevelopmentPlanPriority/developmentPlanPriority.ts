import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { IndividualDevelopmentPlan } from '../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan';


@Directive()
export class DevelopmentPlanPriority extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = DevelopmentPlanPriority.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base.PMS', 'DevelopmentPlanPriority', 'Development Plan Priority');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfPriority_IndividualDevelopmentPlan: IndividualDevelopmentPlan[] = [];

  //#endregion

  
  public get SeekInstance(): DevelopmentPlanPriority {
    return DevelopmentPlanPriority.SeekInstance();
  }

  public static SeekInstance() : DevelopmentPlanPriority {
    let developmentPlanPriority: DevelopmentPlanPriority = new DevelopmentPlanPriority();
    developmentPlanPriority.isActive = null;
    developmentPlanPriority.ResetPaginate();
    return developmentPlanPriority;
  }

  public static Validate(developmentPlanPriority: DevelopmentPlanPriority) : boolean {
    let result = Validator.Validate(developmentPlanPriority.title);
    if(result === false)
      console.log('DevelopmentPlanPriority is unvalid : ', developmentPlanPriority);
    return result;
  }
}