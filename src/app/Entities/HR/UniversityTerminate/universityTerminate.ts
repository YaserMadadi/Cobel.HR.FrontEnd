import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { UniversityHistory } from '../UniversityHistory/universityHistory';


@Directive()
export class UniversityTerminate extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = UniversityTerminate.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('HR', 'UniversityTerminate', 'University Terminate');

  //endregion

  //#region Fields

	public universityHistory: UniversityHistory = new UniversityHistory();
	
	public finishedDate: Date = new Date();
	
	public average: number = 0;

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): UniversityTerminate {
    return UniversityTerminate.SeekInstance();
  }

  public static SeekInstance() : UniversityTerminate {
    let universityTerminate: UniversityTerminate = new UniversityTerminate();
    universityTerminate.finishedDate = null;
    universityTerminate.ResetPaginate();
    return universityTerminate;
  }

  public static Validate(universityTerminate: UniversityTerminate) : boolean {
    let result = Validator.Validate(universityTerminate.universityHistory);
    if(result === false)
      console.log('UniversityTerminate is unvalid : ', universityTerminate);
    return result;
  }
}