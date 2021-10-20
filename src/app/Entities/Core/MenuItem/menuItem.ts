import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { RoleMenuItem } from '../RoleMenuItem/roleMenuItem';
import { Badge } from '../Badge/badge';
import { Menu } from '../Menu/menu';
import { MenuItemType } from '../MenuItemType/menuItemType';


@Directive()
export class MenuItem extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = MenuItem.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Core', 'MenuItem', 'MenuItem');

  //endregion

  //#region Fields

	public menu: Menu = new Menu();
	
	public menuItemType: MenuItemType = new MenuItemType();
	
	public title: string = '';
	
	public url: string = '';
	
	public icon: string = '';
	
	public priority: number = 0;

	//#endregion

  //#region Collection Properties

  public listOfRoleMenuItem: RoleMenuItem[] = [];
	
	public listOfBadge: Badge[] = [];

  //#endregion

  
  public get SeekInstance(): MenuItem {
    return MenuItem.SeekInstance();
  }

  public static SeekInstance() : MenuItem {
    let menuItem: MenuItem = new MenuItem();
    // No Item...
    menuItem.ResetPaginate();
    return menuItem;
  }

  public static Validate(menuItem: MenuItem) : boolean {
    let result = Validator.Validate(menuItem.menu) &&
					Validator.Validate(menuItem.menuItemType) &&
					Validator.Validate(menuItem.title) &&
					Validator.Validate(menuItem.url) &&
					Validator.Validate(menuItem.icon);
    if(result === false)
      console.log('MenuItem is unvalid : ', menuItem);
    return result;
  }
}
