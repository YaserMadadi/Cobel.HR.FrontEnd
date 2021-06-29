import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { UniversityHistory } from '../../HR/UniversityHistory/universityHistory';
import { UniversityFieldCategory } from '../UniversityFieldCategory/universityFieldCategory';


@Directive()
export class FieldOfStudy extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = FieldOfStudy.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base', 'FieldOfStudy', 'Field Of Study');

  //endregion

  //#region Fields

	public universityFieldCategory: UniversityFieldCategory = new UniversityFieldCategory();
	
	public major: string = '';
	
	public minor: string = '';
	
	public code: number = 0;
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfUniversityHistory: UniversityHistory[] = [];

  //#endregion

  
  public get SeekInstance(): FieldOfStudy {
    return FieldOfStudy.SeekInstance();
  }

  public static SeekInstance() : FieldOfStudy {
    let fieldOfStudy: FieldOfStudy = new FieldOfStudy();
    fieldOfStudy.isActive = null;
    fieldOfStudy.ResetPaginate();
    return fieldOfStudy;
  }

  public static Validate(fieldOfStudy: FieldOfStudy) : boolean {
    let result = Validator.Validate(fieldOfStudy.universityFieldCategory) &&
					Validator.Validate(fieldOfStudy.major) &&
					Validator.Validate(fieldOfStudy.minor);
    if(result === false)
      console.log('FieldOfStudy is unvalid : ', fieldOfStudy);
    return result;
  }
}