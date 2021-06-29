import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Employee } from '../../HR/Employee/employee';


@Directive()
export class Impersonate extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Impersonate.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Core', 'Impersonate', 'Impersonate');

  //endregion

  //#region Fields

	public userID: string = '';
	
	public employee: Employee = new Employee();
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): Impersonate {
    return Impersonate.SeekInstance();
  }

  public static SeekInstance() : Impersonate {
    let impersonate: Impersonate = new Impersonate();
    impersonate.isActive = null;
    impersonate.ResetPaginate();
    return impersonate;
  }

  public static Validate(impersonate: Impersonate) : boolean {
    let result = Validator.Validate(impersonate.userID) &&
					Validator.Validate(impersonate.employee);
    if(result === false)
      console.log('Impersonate is unvalid : ', impersonate);
    return result;
  }
}