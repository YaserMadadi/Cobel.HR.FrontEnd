import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { ExceptionLog } from '../ExceptionLog/exceptionLog';


@Directive()
export class CommandParameter extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = CommandParameter.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Core', 'CommandParameter', 'CommandParameter');

  //endregion

  //#region Fields

	public exceptionLog: ExceptionLog = new ExceptionLog();
	
	public name: string = '';
	
	public value: string = '';
	
	public typeName: string = '';

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): CommandParameter {
    return CommandParameter.SeekInstance();
  }

  public static SeekInstance() : CommandParameter {
    let commandParameter: CommandParameter = new CommandParameter();
    // No Item...
    commandParameter.ResetPaginate();
    return commandParameter;
  }

  public static Validate(commandParameter: CommandParameter) : boolean {
    let result = Validator.Validate(commandParameter.exceptionLog) &&
					Validator.Validate(commandParameter.name) &&
					Validator.Validate(commandParameter.value) &&
					Validator.Validate(commandParameter.typeName);
    if(result === false)
      console.log('CommandParameter is unvalid : ', commandParameter);
    return result;
  }
}
