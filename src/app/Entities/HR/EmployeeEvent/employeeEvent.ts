import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Employee } from '../Employee/employee';
import { EventType } from '../../Base.HR/EventType/eventType';


@Directive()
export class EmployeeEvent extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = EmployeeEvent.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('HR', 'EmployeeEvent', 'Employee Event');

  //endregion

  //#region Fields

	public employee: Employee = new Employee();
	
	public date: Date = new Date();
	
	public time: string = '';
	
	public eventType: EventType = new EventType();
	
	public title: string = '';
	
	public content: string = '';
	
	public link: string = '';

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): EmployeeEvent {
    return EmployeeEvent.SeekInstance();
  }

  public static SeekInstance() : EmployeeEvent {
    let employeeEvent: EmployeeEvent = new EmployeeEvent();
    employeeEvent.date = null;
		employeeEvent.time = null;
    employeeEvent.ResetPaginate();
    return employeeEvent;
  }

  public static Validate(employeeEvent: EmployeeEvent) : boolean {
    let result = Validator.Validate(employeeEvent.employee) &&
					Validator.Validate(employeeEvent.eventType) &&
					Validator.Validate(employeeEvent.title) &&
					Validator.Validate(employeeEvent.content) &&
					Validator.Validate(employeeEvent.link);
    if(result === false)
      console.log('EmployeeEvent is unvalid : ', employeeEvent);
    return result;
  }
}