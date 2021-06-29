import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { CoachingQuestionary } from '../CoachingQuestionary/coachingQuestionary';


@Directive()
export class CoachingQuestionaryDetail extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = CoachingQuestionaryDetail.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('LAD', 'CoachingQuestionaryDetail', 'Coaching Questionary Detail');

  //endregion

  //#region Fields

	public coachingQuestionary: CoachingQuestionary = new CoachingQuestionary();
	
	public date: Date = new Date();
	
	public from: string = '';
	
	public to: string = '';

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): CoachingQuestionaryDetail {
    return CoachingQuestionaryDetail.SeekInstance();
  }

  public static SeekInstance() : CoachingQuestionaryDetail {
    let coachingQuestionaryDetail: CoachingQuestionaryDetail = new CoachingQuestionaryDetail();
    coachingQuestionaryDetail.date = null;
		coachingQuestionaryDetail.from = null;
		coachingQuestionaryDetail.to = null;
    coachingQuestionaryDetail.ResetPaginate();
    return coachingQuestionaryDetail;
  }

  public static Validate(coachingQuestionaryDetail: CoachingQuestionaryDetail) : boolean {
    let result = Validator.Validate(coachingQuestionaryDetail.coachingQuestionary);
    if(result === false)
      console.log('CoachingQuestionaryDetail is unvalid : ', coachingQuestionaryDetail);
    return result;
  }
}