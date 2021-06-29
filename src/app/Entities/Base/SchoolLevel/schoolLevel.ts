import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { SchoolHistory } from '../../HR/SchoolHistory/schoolHistory';


@Directive()
export class SchoolLevel extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = SchoolLevel.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base', 'SchoolLevel', 'School Level');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfSchoolHistory: SchoolHistory[] = [];

  //#endregion

  
  public get SeekInstance(): SchoolLevel {
    return SchoolLevel.SeekInstance();
  }

  public static SeekInstance() : SchoolLevel {
    let schoolLevel: SchoolLevel = new SchoolLevel();
    schoolLevel.isActive = null;
    schoolLevel.ResetPaginate();
    return schoolLevel;
  }

  public static Validate(schoolLevel: SchoolLevel) : boolean {
    let result = Validator.Validate(schoolLevel.title);
    if(result === false)
      console.log('SchoolLevel is unvalid : ', schoolLevel);
    return result;
  }
}