import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Employee } from '../Employee/employee';


@Directive()
export class EmployeeNotification extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = EmployeeNotification.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('HR', 'EmployeeNotification', 'Employee Notification');

  //endregion

  //#region Fields

	public employee: Employee = new Employee();
	
	public title: string = '';
	
	public content: string = '';
	
	public sendTime: Date = new Date();
	
	public viewTime: Date = new Date();
	
	public link: string = '';

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): EmployeeNotification {
    return EmployeeNotification.SeekInstance();
  }

  public static SeekInstance() : EmployeeNotification {
    let employeeNotification: EmployeeNotification = new EmployeeNotification();
    employeeNotification.sendTime = null;
		employeeNotification.viewTime = null;
    employeeNotification.ResetPaginate();
    return employeeNotification;
  }

  public static Validate(employeeNotification: EmployeeNotification) : boolean {
    let result = Validator.Validate(employeeNotification.employee) &&
					Validator.Validate(employeeNotification.title) &&
					Validator.Validate(employeeNotification.content) &&
					Validator.Validate(employeeNotification.link);
    if(result === false)
      console.log('EmployeeNotification is unvalid : ', employeeNotification);
    return result;
  }
}