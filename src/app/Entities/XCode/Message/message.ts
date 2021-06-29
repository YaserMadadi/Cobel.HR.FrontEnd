import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';


@Directive()
export class Message extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Message.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('XCode', 'Message', 'Message');

  //endregion

  //#region Fields

	public title: string = '';
	
	public code: number = 0;

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): Message {
    return Message.SeekInstance();
  }

  public static SeekInstance() : Message {
    let message: Message = new Message();
    // No Item...
    message.ResetPaginate();
    return message;
  }

  public static Validate(message: Message) : boolean {
    let result = Validator.Validate(message.title);
    if(result === false)
      console.log('Message is unvalid : ', message);
    return result;
  }
}