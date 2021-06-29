import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Assessment } from '../Assessment/assessment';
import { Coaching } from '../Coaching/coaching';


@Directive()
export class AssessmentCoaching extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = AssessmentCoaching.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('LAD', 'AssessmentCoaching', 'Assessment Coaching');

  //endregion

  //#region Fields

	public assessment: Assessment = new Assessment();
	
	public coaching: Coaching = new Coaching();

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): AssessmentCoaching {
    return AssessmentCoaching.SeekInstance();
  }

  public static SeekInstance() : AssessmentCoaching {
    let assessmentCoaching: AssessmentCoaching = new AssessmentCoaching();
    // No Item...
    assessmentCoaching.ResetPaginate();
    return assessmentCoaching;
  }

  public static Validate(assessmentCoaching: AssessmentCoaching) : boolean {
    let result = Validator.Validate(assessmentCoaching.assessment) &&
					Validator.Validate(assessmentCoaching.coaching);
    if(result === false)
      console.log('AssessmentCoaching is unvalid : ', assessmentCoaching);
    return result;
  }
}