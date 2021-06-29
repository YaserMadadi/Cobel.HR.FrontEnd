import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { AssessorConnectionLine } from '../AssessorConnectionLine/assessorConnectionLine';
import { Assessment } from '../Assessment/assessment';
import { Gender } from '../../Base/Gender/gender';


@Directive()
export class Assessor extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Assessor.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('LAD', 'Assessor', 'Assessor');

  //endregion

  //#region Fields

	public gender: Gender = new Gender();
	
	public firstName: string = '';
	
	public lastName: string = '';

	//#endregion

  //#region Collection Properties

  public listOfAssessorConnectionLine: AssessorConnectionLine[] = [];
	
	public listOfAssessment: Assessment[] = [];

  //#endregion

  
  public get SeekInstance(): Assessor {
    return Assessor.SeekInstance();
  }

  public static SeekInstance() : Assessor {
    let assessor: Assessor = new Assessor();
    // No Item...
    assessor.ResetPaginate();
    return assessor;
  }

  public static Validate(assessor: Assessor) : boolean {
    let result = Validator.Validate(assessor.gender) &&
					Validator.Validate(assessor.firstName) &&
					Validator.Validate(assessor.lastName);
    if(result === false)
      console.log('Assessor is unvalid : ', assessor);
    return result;
  }
}