import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Role } from '../Role/role';
import { MenuItem } from '../MenuItem/menuItem';


@Directive()
export class RoleMenuItem extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = RoleMenuItem.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Core', 'RoleMenuItem', 'RoleMenuItem');

  //endregion

  //#region Fields

	public role: Role = new Role();
	
	public menuItem: MenuItem = new MenuItem();
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): RoleMenuItem {
    return RoleMenuItem.SeekInstance();
  }

  public static SeekInstance() : RoleMenuItem {
    let roleMenuItem: RoleMenuItem = new RoleMenuItem();
    roleMenuItem.isActive = null;
    roleMenuItem.ResetPaginate();
    return roleMenuItem;
  }

  public static Validate(roleMenuItem: RoleMenuItem) : boolean {
    let result = Validator.Validate(roleMenuItem.role) &&
					Validator.Validate(roleMenuItem.menuItem);
    if(result === false)
      console.log('RoleMenuItem is unvalid : ', roleMenuItem);
    return result;
  }
}
