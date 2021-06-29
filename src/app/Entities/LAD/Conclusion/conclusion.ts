import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Assessment } from '../Assessment/assessment';
import { ConclusionType } from '../ConclusionType/conclusionType';


@Directive()
export class Conclusion extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Conclusion.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('LAD', 'Conclusion', 'Conclusion');

  //endregion

  //#region Fields

	public assessment: Assessment = new Assessment();
	
	public conclusionType: ConclusionType = new ConclusionType();
	
	public note: string = '';

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): Conclusion {
    return Conclusion.SeekInstance();
  }

  public static SeekInstance() : Conclusion {
    let conclusion: Conclusion = new Conclusion();
    // No Item...
    conclusion.ResetPaginate();
    return conclusion;
  }

  public static Validate(conclusion: Conclusion) : boolean {
    let result = Validator.Validate(conclusion.assessment) &&
					Validator.Validate(conclusion.conclusionType) &&
					Validator.Validate(conclusion.note);
    if(result === false)
      console.log('Conclusion is unvalid : ', conclusion);
    return result;
  }
}