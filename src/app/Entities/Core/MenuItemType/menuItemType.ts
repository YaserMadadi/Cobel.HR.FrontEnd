import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { MenuItem } from '../MenuItem/menuItem';


@Directive()
export class MenuItemType extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = MenuItemType.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Core', 'MenuItemType', 'MenuItemType');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfMenuItem: MenuItem[] = [];

  //#endregion

  
  public get SeekInstance(): MenuItemType {
    return MenuItemType.SeekInstance();
  }

  public static SeekInstance() : MenuItemType {
    let menuItemType: MenuItemType = new MenuItemType();
    menuItemType.isActive = null;
    menuItemType.ResetPaginate();
    return menuItemType;
  }

  public static Validate(menuItemType: MenuItemType) : boolean {
    let result = Validator.Validate(menuItemType.title);
    if(result === false)
      console.log('MenuItemType is unvalid : ', menuItemType);
    return result;
  }
}
