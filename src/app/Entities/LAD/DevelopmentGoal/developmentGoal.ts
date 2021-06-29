import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Assessment } from '../Assessment/assessment';


@Directive()
export class DevelopmentGoal extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = DevelopmentGoal.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('LAD', 'DevelopmentGoal', 'Development Goal');

  //endregion

  //#region Fields

	public assessment: Assessment = new Assessment();
	
	public note: string = '';

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): DevelopmentGoal {
    return DevelopmentGoal.SeekInstance();
  }

  public static SeekInstance() : DevelopmentGoal {
    let developmentGoal: DevelopmentGoal = new DevelopmentGoal();
    // No Item...
    developmentGoal.ResetPaginate();
    return developmentGoal;
  }

  public static Validate(developmentGoal: DevelopmentGoal) : boolean {
    let result = Validator.Validate(developmentGoal.assessment) &&
					Validator.Validate(developmentGoal.note);
    if(result === false)
      console.log('DevelopmentGoal is unvalid : ', developmentGoal);
    return result;
  }
}