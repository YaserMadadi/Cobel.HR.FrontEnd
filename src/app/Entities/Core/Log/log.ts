import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Person } from '../../HR/Person/person';


@Directive()
export class Log extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Log.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Core', 'Log', 'Log');

  //endregion

  //#region Fields

	public entityName: string = '';
	
	public recordID: number = 0;
	
	public person: Person = new Person();
	
	public effectDate: Date = new Date();
	
	public oldValue: string = '';
	
	public newValue: string = '';
	
	public actionMode: string = '';

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): Log {
    return Log.SeekInstance();
  }

  public static SeekInstance() : Log {
    let log: Log = new Log();
    log.effectDate = null;
    log.ResetPaginate();
    return log;
  }

  public static Validate(log: Log) : boolean {
    let result = Validator.Validate(log.entityName) &&
					Validator.Validate(log.person) &&
					Validator.Validate(log.oldValue) &&
					Validator.Validate(log.newValue) &&
					Validator.Validate(log.actionMode);
    if(result === false)
      console.log('Log is unvalid : ', log);
    return result;
  }
}