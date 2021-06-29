import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { IndividualDevelopmentPlan } from '../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan';


@Directive()
export class Subject extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Subject.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base.PMS', 'Subject', 'Subject');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfIndividualDevelopmentPlan: IndividualDevelopmentPlan[] = [];

  //#endregion

  
  public get SeekInstance(): Subject {
    return Subject.SeekInstance();
  }

  public static SeekInstance() : Subject {
    let subject: Subject = new Subject();
    subject.isActive = null;
    subject.ResetPaginate();
    return subject;
  }

  public static Validate(subject: Subject) : boolean {
    let result = Validator.Validate(subject.title);
    if(result === false)
      console.log('Subject is unvalid : ', subject);
    return result;
  }
}