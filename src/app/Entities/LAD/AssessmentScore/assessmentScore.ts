import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Assessment } from '../Assessment/assessment';
import { CompetencyItem } from '../../PMS/CompetencyItem/competencyItem';


@Directive()
export class AssessmentScore extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = AssessmentScore.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('LAD', 'AssessmentScore', 'Assessment Score');

  //endregion

  //#region Fields

	public assessment: Assessment = new Assessment();
	
	public competencyItem: CompetencyItem = new CompetencyItem();
	
	public expectedScore: number = 0;
	
	public employeeScore: number = 0;
	
	public managerScore: number = 0;

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): AssessmentScore {
    return AssessmentScore.SeekInstance();
  }

  public static SeekInstance() : AssessmentScore {
    let assessmentScore: AssessmentScore = new AssessmentScore();
    // No Item...
    assessmentScore.ResetPaginate();
    return assessmentScore;
  }

  public static Validate(assessmentScore: AssessmentScore) : boolean {
    let result = Validator.Validate(assessmentScore.assessment) &&
					Validator.Validate(assessmentScore.competencyItem);
    if(result === false)
      console.log('AssessmentScore is unvalid : ', assessmentScore);
    return result;
  }
}