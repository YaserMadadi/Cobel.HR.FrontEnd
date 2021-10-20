import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { CommandParameter } from '../CommandParameter/commandParameter';


@Directive()
export class ExceptionLog extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = ExceptionLog.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Core', 'ExceptionLog', 'ExceptionLog');

  //endregion

  //#region Fields

	public date: Date = new Date();
	
	public time: string = '';
	
	public commandName: string = '';
	
	public exceptionType: string = '';
	
	public errorMessage: string = '';
	
	public errorNumber: number = 0;
	
	public errorCode: number = 0;
	
	public jsonValue: string = '';

	//#endregion

  //#region Collection Properties

  public listOfCommandParameter: CommandParameter[] = [];

  //#endregion

  
  public get SeekInstance(): ExceptionLog {
    return ExceptionLog.SeekInstance();
  }

  public static SeekInstance() : ExceptionLog {
    let exceptionLog: ExceptionLog = new ExceptionLog();
    exceptionLog.date = null;
		exceptionLog.time = null;
    exceptionLog.ResetPaginate();
    return exceptionLog;
  }

  public static Validate(exceptionLog: ExceptionLog) : boolean {
    let result = Validator.Validate(exceptionLog.commandName) &&
					Validator.Validate(exceptionLog.exceptionType) &&
					Validator.Validate(exceptionLog.errorMessage) &&
					Validator.Validate(exceptionLog.jsonValue);
    if(result === false)
      console.log('ExceptionLog is unvalid : ', exceptionLog);
    return result;
  }
}
