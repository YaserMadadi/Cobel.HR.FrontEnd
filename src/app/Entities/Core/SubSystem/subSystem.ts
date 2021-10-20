import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Menu } from '../Menu/menu';


@Directive()
export class SubSystem extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = SubSystem.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Core', 'SubSystem', 'SubSystem');

  //endregion

  //#region Fields

	public title: string = '';
	
	public icon: string = '';
	
	public priority: number = 0;

  public isActive : boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfMenu: Menu[] = [];

  //#endregion

  
  public get SeekInstance(): SubSystem {
    return SubSystem.SeekInstance();
  }

  public static SeekInstance() : SubSystem {
    let subSystem: SubSystem = new SubSystem();
    subSystem.isActive = null;
    // No Item...
    subSystem.ResetPaginate();
    return subSystem;
  }

  public static Validate(subSystem: SubSystem) : boolean {
    let result = Validator.Validate(subSystem.title) &&
					Validator.Validate(subSystem.icon);
    if(result === false)
      console.log('SubSystem is unvalid : ', subSystem);
    return result;
  }
}
