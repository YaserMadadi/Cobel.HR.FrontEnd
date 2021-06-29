import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { RolePermission } from '../RolePermission/rolePermission';
import { RoleMember } from '../RoleMember/roleMember';


@Directive()
export class Role extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Role.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Core', 'Role', 'Role');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfRolePermission: RolePermission[] = [];
	
	public listOfRoleMember: RoleMember[] = [];

  //#endregion

  
  public get SeekInstance(): Role {
    return Role.SeekInstance();
  }

  public static SeekInstance() : Role {
    let role: Role = new Role();
    role.isActive = null;
    role.ResetPaginate();
    return role;
  }

  public static Validate(role: Role) : boolean {
    let result = Validator.Validate(role.title);
    if(result === false)
      console.log('Role is unvalid : ', role);
    return result;
  }
}