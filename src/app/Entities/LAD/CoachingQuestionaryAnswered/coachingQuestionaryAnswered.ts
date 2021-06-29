import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { CoachingQuestionary } from '../CoachingQuestionary/coachingQuestionary';
import { QuestionaryItem } from '../QuestionaryItem/questionaryItem';


@Directive()
export class CoachingQuestionaryAnswered extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = CoachingQuestionaryAnswered.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('LAD', 'CoachingQuestionaryAnswered', 'Coaching Questionary Answered');

  //endregion

  //#region Fields

	public coachingQuestionary: CoachingQuestionary = new CoachingQuestionary();
	
	public questionaryItem: QuestionaryItem = new QuestionaryItem();
	
	public answerValue: number = 0;
	
	public answerText: string = '';

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): CoachingQuestionaryAnswered {
    return CoachingQuestionaryAnswered.SeekInstance();
  }

  public static SeekInstance() : CoachingQuestionaryAnswered {
    let coachingQuestionaryAnswered: CoachingQuestionaryAnswered = new CoachingQuestionaryAnswered();
    // No Item...
    coachingQuestionaryAnswered.ResetPaginate();
    return coachingQuestionaryAnswered;
  }

  public static Validate(coachingQuestionaryAnswered: CoachingQuestionaryAnswered) : boolean {
    let result = Validator.Validate(coachingQuestionaryAnswered.coachingQuestionary) &&
					Validator.Validate(coachingQuestionaryAnswered.questionaryItem) &&
					Validator.Validate(coachingQuestionaryAnswered.answerText);
    if(result === false)
      console.log('CoachingQuestionaryAnswered is unvalid : ', coachingQuestionaryAnswered);
    return result;
  }
}