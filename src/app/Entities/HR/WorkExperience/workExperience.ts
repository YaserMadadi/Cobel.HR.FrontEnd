import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Person } from '../Person/person';


@Directive()
export class WorkExperience extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = WorkExperience.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('HR', 'WorkExperience', 'Work Experience');

  //endregion

  //#region Fields

	public person: Person = new Person();
	
	public persianCompanyName: string = '';
	
	public englishCompanyName: string = '';
	
	public persianPositionName: string = '';
	
	public englishPositionName: string = '';
	
	public fromDate: Date = new Date();
	
	public toDate: Date = new Date();

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): WorkExperience {
    return WorkExperience.SeekInstance();
  }

  public static SeekInstance() : WorkExperience {
    let workExperience: WorkExperience = new WorkExperience();
    workExperience.fromDate = null;
		workExperience.toDate = null;
    workExperience.ResetPaginate();
    return workExperience;
  }

  public static Validate(workExperience: WorkExperience) : boolean {
    let result = Validator.Validate(workExperience.person) &&
					Validator.Validate(workExperience.persianCompanyName) &&
					Validator.Validate(workExperience.englishCompanyName) &&
					Validator.Validate(workExperience.persianPositionName) &&
					Validator.Validate(workExperience.englishPositionName);
    if(result === false)
      console.log('WorkExperience is unvalid : ', workExperience);
    return result;
  }
}