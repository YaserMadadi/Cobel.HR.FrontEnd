import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { MenuItem } from '../MenuItem/menuItem';
import { SubSystem } from '../SubSystem/subSystem';


@Directive()
export class Menu extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Menu.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Core', 'Menu', 'Menu');

  //endregion

  //#region Fields

	public subSystem: SubSystem = new SubSystem();
	
	public title: string = '';
	
	public icon: string = '';
	
	public priority: number = 0;

	//#endregion

  //#region Collection Properties

  public listOfMenuItem: MenuItem[] = [];

  //#endregion

  
  public get SeekInstance(): Menu {
    return Menu.SeekInstance();
  }

  public static SeekInstance() : Menu {
    let menu: Menu = new Menu();
    // No Item...
    menu.ResetPaginate();
    return menu;
  }

  public static Validate(menu: Menu) : boolean {
    let result = Validator.Validate(menu.subSystem) &&
					Validator.Validate(menu.title) &&
					Validator.Validate(menu.icon);
    if(result === false)
      console.log('Menu is unvalid : ', menu);
    return result;
  }
}
