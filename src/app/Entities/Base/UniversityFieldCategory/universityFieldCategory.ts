import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { FieldOfStudy } from '../FieldOfStudy/fieldOfStudy';


@Directive()
export class UniversityFieldCategory extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = UniversityFieldCategory.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base', 'UniversityFieldCategory', 'University Field Category');

  //endregion

  //#region Fields

	public title: string = '';
	
	public code: number = 0;
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfFieldOfStudy: FieldOfStudy[] = [];

  //#endregion

  
  public get SeekInstance(): UniversityFieldCategory {
    return UniversityFieldCategory.SeekInstance();
  }

  public static SeekInstance() : UniversityFieldCategory {
    let universityFieldCategory: UniversityFieldCategory = new UniversityFieldCategory();
    universityFieldCategory.isActive = null;
    universityFieldCategory.ResetPaginate();
    return universityFieldCategory;
  }

  public static Validate(universityFieldCategory: UniversityFieldCategory) : boolean {
    let result = Validator.Validate(universityFieldCategory.title);
    if(result === false)
      console.log('UniversityFieldCategory is unvalid : ', universityFieldCategory);
    return result;
  }
}