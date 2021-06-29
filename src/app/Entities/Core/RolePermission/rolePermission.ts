import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Role } from '../Role/role';
import { Entity } from '../Entity/entity';


@Directive()
export class RolePermission extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = RolePermission.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Core', 'RolePermission', 'Role Permission');

  //endregion

  //#region Fields

	public role: Role = new Role();
	
	public entity: Entity = new Entity();
	
	public addPermission: boolean = false;
	
	public editPermission: boolean = false;
	
	public deletePermission: boolean = false;
	
	public viewIndexPermission: boolean = false;
	
	public viewLogPermission: boolean = false;

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): RolePermission {
    return RolePermission.SeekInstance();
  }

  public static SeekInstance() : RolePermission {
    let rolePermission: RolePermission = new RolePermission();
    rolePermission.addPermission = null;
		rolePermission.editPermission = null;
		rolePermission.deletePermission = null;
		rolePermission.viewIndexPermission = null;
		rolePermission.viewLogPermission = null;
    rolePermission.ResetPaginate();
    return rolePermission;
  }

  public static Validate(rolePermission: RolePermission) : boolean {
    let result = Validator.Validate(rolePermission.role) &&
					Validator.Validate(rolePermission.entity);
    if(result === false)
      console.log('RolePermission is unvalid : ', rolePermission);
    return result;
  }
}