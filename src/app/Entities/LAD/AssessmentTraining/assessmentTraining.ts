import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Assessment } from '../Assessment/assessment';
import { YearQuarter } from '../../Base/YearQuarter/yearQuarter';


@Directive()
export class AssessmentTraining extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = AssessmentTraining.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('LAD', 'AssessmentTraining', 'Assessment Training');

  //endregion

  //#region Fields

	public assessment: Assessment = new Assessment();
	
	public course: string = '';
	
	public deadLine: YearQuarter = new YearQuarter();
	
	public responsible: string = '';

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): AssessmentTraining {
    return AssessmentTraining.SeekInstance();
  }

  public static SeekInstance() : AssessmentTraining {
    let assessmentTraining: AssessmentTraining = new AssessmentTraining();
    // No Item...
    assessmentTraining.ResetPaginate();
    return assessmentTraining;
  }

  public static Validate(assessmentTraining: AssessmentTraining) : boolean {
    let result = Validator.Validate(assessmentTraining.assessment) &&
					Validator.Validate(assessmentTraining.course) &&
					Validator.Validate(assessmentTraining.deadLine) &&
					Validator.Validate(assessmentTraining.responsible);
    if(result === false)
      console.log('AssessmentTraining is unvalid : ', assessmentTraining);
    return result;
  }
}