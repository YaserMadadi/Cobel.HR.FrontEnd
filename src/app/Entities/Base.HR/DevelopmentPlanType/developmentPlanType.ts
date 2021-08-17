import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';


@Directive()
export class DevelopmentPlanType extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = DevelopmentPlanType.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base.HR', 'DevelopmentPlanType', 'DevelopmentPlanType');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): DevelopmentPlanType {
    return DevelopmentPlanType.SeekInstance();
  }

  public static SeekInstance() : DevelopmentPlanType {
    let developmentPlanType: DevelopmentPlanType = new DevelopmentPlanType();
    developmentPlanType.isActive = null;
    developmentPlanType.ResetPaginate();
    return developmentPlanType;
  }

  public static Validate(developmentPlanType: DevelopmentPlanType) : boolean {
    let result = Validator.Validate(developmentPlanType.title);
    if(result === false)
      console.log('DevelopmentPlanType is unvalid : ', developmentPlanType);
    return result;
  }
}
