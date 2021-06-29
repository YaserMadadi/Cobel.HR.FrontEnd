import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Assessment } from '../Assessment/assessment';


@Directive()
export class FeedbackSession extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = FeedbackSession.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('LAD', 'FeedbackSession', 'Feedback Session');

  //endregion

  //#region Fields

	public assessment: Assessment = new Assessment();
	
	public date: Date = new Date();

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): FeedbackSession {
    return FeedbackSession.SeekInstance();
  }

  public static SeekInstance() : FeedbackSession {
    let feedbackSession: FeedbackSession = new FeedbackSession();
    feedbackSession.date = null;
    feedbackSession.ResetPaginate();
    return feedbackSession;
  }

  public static Validate(feedbackSession: FeedbackSession) : boolean {
    let result = Validator.Validate(feedbackSession.assessment);
    if(result === false)
      console.log('FeedbackSession is unvalid : ', feedbackSession);
    return result;
  }
}