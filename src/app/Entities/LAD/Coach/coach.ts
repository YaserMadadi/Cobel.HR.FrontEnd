import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Coaching } from '../Coaching/coaching';
import { CoachConnectionLine } from '../CoachConnectionLine/coachConnectionLine';
import { Gender } from '../../Base/Gender/gender';


@Directive()
export class Coach extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Coach.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('LAD', 'Coach', 'Coach');

  //endregion

  //#region Fields

	public gender: Gender = new Gender();
	
	public firstName: string = '';
	
	public lastName: string = '';

	//#endregion

  //#region Collection Properties

  public listOfCoaching: Coaching[] = [];
	
	public listOfCoachConnectionLine: CoachConnectionLine[] = [];

  //#endregion

  
  public get SeekInstance(): Coach {
    return Coach.SeekInstance();
  }

  public static SeekInstance() : Coach {
    let coach: Coach = new Coach();
    // No Item...
    coach.ResetPaginate();
    return coach;
  }

  public static Validate(coach: Coach) : boolean {
    let result = Validator.Validate(coach.gender) &&
					Validator.Validate(coach.firstName) &&
					Validator.Validate(coach.lastName);
    if(result === false)
      console.log('Coach is unvalid : ', coach);
    return result;
  }
}