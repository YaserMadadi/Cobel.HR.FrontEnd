import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Employee } from '../../HR/Employee/employee';
import { Role } from '../Role/role';


@Directive()
export class RoleMember extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = RoleMember.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Core', 'RoleMember', 'Role Member');

  //endregion

  //#region Fields

	public employee: Employee = new Employee();
	
	public role: Role = new Role();

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): RoleMember {
    return RoleMember.SeekInstance();
  }

  public static SeekInstance() : RoleMember {
    let roleMember: RoleMember = new RoleMember();
    // No Item...
    roleMember.ResetPaginate();
    return roleMember;
  }

  public static Validate(roleMember: RoleMember) : boolean {
    let result = Validator.Validate(roleMember.employee) &&
					Validator.Validate(roleMember.role);
    if(result === false)
      console.log('RoleMember is unvalid : ', roleMember);
    return result;
  }
}