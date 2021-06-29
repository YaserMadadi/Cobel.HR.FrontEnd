import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { PromotionAssessment } from '../PromotionAssessment/promotionAssessment';
import { FeedbackSession } from '../FeedbackSession/feedbackSession';
import { DevelopmentGoal } from '../DevelopmentGoal/developmentGoal';
import { Conclusion } from '../Conclusion/conclusion';
import { CoachingQuestionary } from '../CoachingQuestionary/coachingQuestionary';
import { AssessmentTraining } from '../AssessmentTraining/assessmentTraining';
import { AssessmentScore } from '../AssessmentScore/assessmentScore';
import { AssessmentCoaching } from '../AssessmentCoaching/assessmentCoaching';
import { RotationAssessment } from '../RotationAssessment/rotationAssessment';
import { Employee } from '../../HR/Employee/employee';
import { AssessmentType } from '../AssessmentType/assessmentType';
import { Assessor } from '../Assessor/assessor';


@Directive()
export class Assessment extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Assessment.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('LAD', 'Assessment', 'Assessment');

  //endregion

  //#region Fields

	public employee: Employee = new Employee();
	
	public assessmentType: AssessmentType = new AssessmentType();
	
	public assessor: Assessor = new Assessor();
	
	public assessmentDate: Date = new Date();

	//#endregion

  //#region Collection Properties

  public listOfPromotionAssessment: PromotionAssessment[] = [];
	
	public listOfFeedbackSession: FeedbackSession[] = [];
	
	public listOfDevelopmentGoal: DevelopmentGoal[] = [];
	
	public listOfConclusion: Conclusion[] = [];
	
	public listOfCoachingQuestionary: CoachingQuestionary[] = [];
	
	public listOfAssessmentTraining: AssessmentTraining[] = [];
	
	public listOfAssessmentScore: AssessmentScore[] = [];
	
	public listOfAssessmentCoaching: AssessmentCoaching[] = [];
	
	public listOfRotationAssessment: RotationAssessment[] = [];

  //#endregion

  
  public get SeekInstance(): Assessment {
    return Assessment.SeekInstance();
  }

  public static SeekInstance() : Assessment {
    let assessment: Assessment = new Assessment();
    assessment.assessmentDate = null;
    assessment.ResetPaginate();
    return assessment;
  }

  public static Validate(assessment: Assessment) : boolean {
    let result = Validator.Validate(assessment.employee) &&
					Validator.Validate(assessment.assessmentType) &&
					Validator.Validate(assessment.assessor);
    if(result === false)
      console.log('Assessment is unvalid : ', assessment);
    return result;
  }
}