import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { EmployeeDetail } from '../../HR/EmployeeDetail/employeeDetail';
import { Employee } from '../../HR/Employee/employee';


@Directive()
export class HoldingSection extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = HoldingSection.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base', 'HoldingSection', 'Holding Section');

  //endregion

  //#region Fields

	public title: string = '';
	
	public domainName: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfEmployeeDetail: EmployeeDetail[] = [];
	
	public listOfLastHoldingSection_Employee: Employee[] = [];

  //#endregion

  
  public get SeekInstance(): HoldingSection {
    return HoldingSection.SeekInstance();
  }

  public static SeekInstance() : HoldingSection {
    let holdingSection: HoldingSection = new HoldingSection();
    holdingSection.isActive = null;
    holdingSection.ResetPaginate();
    return holdingSection;
  }

  public static Validate(holdingSection: HoldingSection) : boolean {
    let result = Validator.Validate(holdingSection.title) &&
					Validator.Validate(holdingSection.domainName);
    if(result === false)
      console.log('HoldingSection is unvalid : ', holdingSection);
    return result;
  }
}