import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { BehavioralObjective } from '../../PMS/BehavioralObjective/behavioralObjective';


@Directive()
export class ExpectedLevel extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = ExpectedLevel.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base.PMS', 'ExpectedLevel', 'Expected Level');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfBehavioralObjective: BehavioralObjective[] = [];

  //#endregion

  
  public get SeekInstance(): ExpectedLevel {
    return ExpectedLevel.SeekInstance();
  }

  public static SeekInstance() : ExpectedLevel {
    let expectedLevel: ExpectedLevel = new ExpectedLevel();
    expectedLevel.isActive = null;
    expectedLevel.ResetPaginate();
    return expectedLevel;
  }

  public static Validate(expectedLevel: ExpectedLevel) : boolean {
    let result = Validator.Validate(expectedLevel.title);
    if(result === false)
      console.log('ExpectedLevel is unvalid : ', expectedLevel);
    return result;
  }
}