import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Coaching } from '../Coaching/coaching';


@Directive()
export class CoachingSession extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = CoachingSession.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('LAD', 'CoachingSession', 'Coaching Session');

  //endregion

  //#region Fields

	public coaching: Coaching = new Coaching();
	
	public date: Date = new Date();
	
	public note: string = '';

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): CoachingSession {
    return CoachingSession.SeekInstance();
  }

  public static SeekInstance() : CoachingSession {
    let coachingSession: CoachingSession = new CoachingSession();
    coachingSession.date = null;
    coachingSession.ResetPaginate();
    return coachingSession;
  }

  public static Validate(coachingSession: CoachingSession) : boolean {
    let result = Validator.Validate(coachingSession.coaching) &&
					Validator.Validate(coachingSession.note);
    if(result === false)
      console.log('CoachingSession is unvalid : ', coachingSession);
    return result;
  }
}