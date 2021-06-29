import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Employee } from '../Employee/employee';
import { HoldingSection } from '../../Base/HoldingSection/holdingSection';
import { EmploymentStatus } from '../../Base.HR/EmploymentStatus/employmentStatus';


@Directive()
export class EmployeeDetail extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = EmployeeDetail.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('HR', 'EmployeeDetail', 'Employee Detail');

  //endregion

  //#region Fields

	public employee: Employee = new Employee();
	
	public holdingSection: HoldingSection = new HoldingSection();
	
	public employeeCode: number = 0;
	
	public employmentStatus: EmploymentStatus = new EmploymentStatus();
	
	public startWorkingDate: Date = new Date();
	
	public terminationDate: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): EmployeeDetail {
    return EmployeeDetail.SeekInstance();
  }

  public static SeekInstance() : EmployeeDetail {
    let employeeDetail: EmployeeDetail = new EmployeeDetail();
    employeeDetail.startWorkingDate = null;
		employeeDetail.isActive = null;
    employeeDetail.ResetPaginate();
    return employeeDetail;
  }

  public static Validate(employeeDetail: EmployeeDetail) : boolean {
    let result = Validator.Validate(employeeDetail.employee) &&
					Validator.Validate(employeeDetail.holdingSection) &&
					Validator.Validate(employeeDetail.employmentStatus) &&
					Validator.Validate(employeeDetail.terminationDate);
    if(result === false)
      console.log('EmployeeDetail is unvalid : ', employeeDetail);
    return result;
  }
}