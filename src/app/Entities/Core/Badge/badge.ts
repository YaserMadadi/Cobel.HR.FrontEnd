import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { MenuItem } from '../MenuItem/menuItem';
import { BadgeType } from '../BadgeType/badgeType';


@Directive()
export class Badge extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Badge.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Core', 'Badge', 'Badge');

  //endregion

  //#region Fields

	public menuItem: MenuItem = new MenuItem();
	
	public badgeType: BadgeType = new BadgeType();

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): Badge {
    return Badge.SeekInstance();
  }

  public static SeekInstance() : Badge {
    let badge: Badge = new Badge();
    // No Item...
    badge.ResetPaginate();
    return badge;
  }

  public static Validate(badge: Badge) : boolean {
    let result = Validator.Validate(badge.menuItem) &&
					Validator.Validate(badge.badgeType);
    if(result === false)
      console.log('Badge is unvalid : ', badge);
    return result;
  }
}
