import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { CoachingQuestionaryDetail } from '../CoachingQuestionaryDetail/coachingQuestionaryDetail';
import { CoachingQuestionaryAnswered } from '../CoachingQuestionaryAnswered/coachingQuestionaryAnswered';
import { QuestionaryType } from '../QuestionaryType/questionaryType';
import { Assessment } from '../Assessment/assessment';
import { Person } from '../../HR/Person/person';


@Directive()
export class CoachingQuestionary extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = CoachingQuestionary.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('LAD', 'CoachingQuestionary', 'Coaching Questionary');

  //endregion

  //#region Fields

	public questionaryType: QuestionaryType = new QuestionaryType();
	
	public assessment: Assessment = new Assessment();
	
	public responsiblePerson: Person = new Person();
	
	public isActive: boolean = false;
	
	public isDone: boolean = false;
	
	public average: string = '';

	//#endregion

  //#region Collection Properties

  public listOfCoachingQuestionaryDetail: CoachingQuestionaryDetail[] = [];
	
	public listOfCoachingQuestionaryAnswered: CoachingQuestionaryAnswered[] = [];

  //#endregion

  
  public get SeekInstance(): CoachingQuestionary {
    return CoachingQuestionary.SeekInstance();
  }

  public static SeekInstance() : CoachingQuestionary {
    let coachingQuestionary: CoachingQuestionary = new CoachingQuestionary();
    coachingQuestionary.isActive = null;
		coachingQuestionary.isDone = null;
    coachingQuestionary.ResetPaginate();
    return coachingQuestionary;
  }

  public static Validate(coachingQuestionary: CoachingQuestionary) : boolean {
    let result = Validator.Validate(coachingQuestionary.questionaryType) &&
					Validator.Validate(coachingQuestionary.assessment) &&
					Validator.Validate(coachingQuestionary.responsiblePerson);
    if(result === false)
      console.log('CoachingQuestionary is unvalid : ', coachingQuestionary);
    return result;
  }
}