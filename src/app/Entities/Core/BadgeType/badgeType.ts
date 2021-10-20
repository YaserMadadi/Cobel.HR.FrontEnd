import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Badge } from '../Badge/badge';


@Directive()
export class BadgeType extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = BadgeType.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Core', 'BadgeType', 'BadgeType');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfBadge: Badge[] = [];

  //#endregion

  
  public get SeekInstance(): BadgeType {
    return BadgeType.SeekInstance();
  }

  public static SeekInstance() : BadgeType {
    let badgeType: BadgeType = new BadgeType();
    badgeType.isActive = null;
    badgeType.ResetPaginate();
    return badgeType;
  }

  public static Validate(badgeType: BadgeType) : boolean {
    let result = Validator.Validate(badgeType.title);
    if(result === false)
      console.log('BadgeType is unvalid : ', badgeType);
    return result;
  }
}
