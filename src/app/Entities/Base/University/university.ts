import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { UniversityHistory } from '../../HR/UniversityHistory/universityHistory';
import { City } from '../City/city';


@Directive()
export class University extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = University.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base', 'University', 'University');

  //endregion

  //#region Fields

	public title: string = '';
	
	public city: City = new City();
	
	public isExternal: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfUniversityHistory: UniversityHistory[] = [];

  //#endregion

  
  public get SeekInstance(): University {
    return University.SeekInstance();
  }

  public static SeekInstance() : University {
    let university: University = new University();
    university.isExternal = null;
    university.ResetPaginate();
    return university;
  }

  public static Validate(university: University) : boolean {
    let result = Validator.Validate(university.title) &&
					Validator.Validate(university.city);
    if(result === false)
      console.log('University is unvalid : ', university);
    return result;
  }
}