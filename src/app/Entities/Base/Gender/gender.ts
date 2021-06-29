import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Person } from '../../HR/Person/person';
import { Coach } from '../../LAD/Coach/coach';
import { Assessor } from '../../LAD/Assessor/assessor';


@Directive()
export class Gender extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Gender.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base', 'Gender', 'Gender');

  //endregion

  //#region Fields

	public persianTitle: string = '';
	
	public englishTitle: string = '';
	
	public persianPreFix: string = '';
	
	public englishPreFix: string = '';

	//#endregion

  //#region Collection Properties

  public listOfPerson: Person[] = [];
	
	public listOfCoach: Coach[] = [];
	
	public listOfAssessor: Assessor[] = [];

  //#endregion

  
  public get SeekInstance(): Gender {
    return Gender.SeekInstance();
  }

  public static SeekInstance() : Gender {
    let gender: Gender = new Gender();
    // No Item...
    gender.ResetPaginate();
    return gender;
  }

  public static Validate(gender: Gender) : boolean {
    let result = Validator.Validate(gender.persianTitle) &&
					Validator.Validate(gender.englishTitle) &&
					Validator.Validate(gender.persianPreFix) &&
					Validator.Validate(gender.englishPreFix);
    if(result === false)
      console.log('Gender is unvalid : ', gender);
    return result;
  }
}