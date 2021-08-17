import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { EmployeeEvent } from '../../HR/EmployeeEvent/employeeEvent';


@Directive()
export class EventType extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = EventType.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base.HR', 'EventType', 'EventType');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfEmployeeEvent: EmployeeEvent[] = [];

  //#endregion

  
  public get SeekInstance(): EventType {
    return EventType.SeekInstance();
  }

  public static SeekInstance() : EventType {
    let eventType: EventType = new EventType();
    eventType.isActive = null;
    eventType.ResetPaginate();
    return eventType;
  }

  public static Validate(eventType: EventType) : boolean {
    let result = Validator.Validate(eventType.title);
    if(result === false)
      console.log('EventType is unvalid : ', eventType);
    return result;
  }
}
