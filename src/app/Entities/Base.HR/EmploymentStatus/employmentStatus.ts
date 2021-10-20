import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Employee } from '../../HR/Employee/employee';
import { EmployeeDetail } from '../../HR/EmployeeDetail/employeeDetail';


@Directive()
export class EmploymentStatus extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = EmploymentStatus.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base.HR', 'EmploymentStatus', 'EmploymentStatus');

  //endregion

  //#region Fields

	public englishTitle: string = '';
	
	public persianTitle: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfEmployee: Employee[] = [];
	
	public listOfEmployeeDetail: EmployeeDetail[] = [];

  //#endregion

  
  public get SeekInstance(): EmploymentStatus {
    return EmploymentStatus.SeekInstance();
  }

  public static SeekInstance() : EmploymentStatus {
    let employmentStatus: EmploymentStatus = new EmploymentStatus();
    employmentStatus.isActive = null;
    employmentStatus.ResetPaginate();
    return employmentStatus;
  }

  public static Validate(employmentStatus: EmploymentStatus) : boolean {
    let result = Validator.Validate(employmentStatus.englishTitle) &&
					Validator.Validate(employmentStatus.persianTitle);
    if(result === false)
      console.log('EmploymentStatus is unvalid : ', employmentStatus);
    return result;
  }
}
