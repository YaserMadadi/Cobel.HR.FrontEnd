import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { CoachingSession } from '../CoachingSession/coachingSession';
import { AssessmentCoaching } from '../AssessmentCoaching/assessmentCoaching';
import { Employee } from '../../HR/Employee/employee';
import { Coach } from '../Coach/coach';


@Directive()
export class Coaching extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Coaching.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('LAD', 'Coaching', 'Coaching');

  //endregion

  //#region Fields

	public employee: Employee = new Employee();
	
	public agreementDate: Date = new Date();
	
	public porpuse: string = '';
	
	public coach: Coach = new Coach();
	
	public sessionCount: number = 0;
	
	public effectiveness: number = 0;
	
	public runnedSessionCount: number = 0;
	
	public isFinished: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfCoachingSession: CoachingSession[] = [];
	
	public listOfAssessmentCoaching: AssessmentCoaching[] = [];

  //#endregion

  
  public get SeekInstance(): Coaching {
    return Coaching.SeekInstance();
  }

  public static SeekInstance() : Coaching {
    let coaching: Coaching = new Coaching();
    coaching.agreementDate = null;
		coaching.isFinished = null;
    coaching.ResetPaginate();
    return coaching;
  }

  public static Validate(coaching: Coaching) : boolean {
    let result = Validator.Validate(coaching.employee) &&
					Validator.Validate(coaching.porpuse) &&
					Validator.Validate(coaching.coach);
    if(result === false)
      console.log('Coaching is unvalid : ', coaching);
    return result;
  }
}