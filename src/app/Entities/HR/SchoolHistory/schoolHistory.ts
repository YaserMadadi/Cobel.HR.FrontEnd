import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Person } from '../Person/person';
import { SchoolLevel } from '../../Base/SchoolLevel/schoolLevel';


@Directive()
export class SchoolHistory extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = SchoolHistory.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('HR', 'SchoolHistory', 'School History');

  //endregion

  //#region Fields

	public person: Person = new Person();
	
	public schoolLevel: SchoolLevel = new SchoolLevel();
	
	public schoolName: string = '';

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): SchoolHistory {
    return SchoolHistory.SeekInstance();
  }

  public static SeekInstance() : SchoolHistory {
    let schoolHistory: SchoolHistory = new SchoolHistory();
    // No Item...
    schoolHistory.ResetPaginate();
    return schoolHistory;
  }

  public static Validate(schoolHistory: SchoolHistory) : boolean {
    let result = Validator.Validate(schoolHistory.person) &&
					Validator.Validate(schoolHistory.schoolLevel) &&
					Validator.Validate(schoolHistory.schoolName);
    if(result === false)
      console.log('SchoolHistory is unvalid : ', schoolHistory);
    return result;
  }
}