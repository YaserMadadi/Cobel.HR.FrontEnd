import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Habitancy } from '../../HR/Habitancy/habitancy';


@Directive()
export class HabitancyType extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = HabitancyType.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base', 'HabitancyType', 'Habitancy Type');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfHabitancy: Habitancy[] = [];

  //#endregion

  
  public get SeekInstance(): HabitancyType {
    return HabitancyType.SeekInstance();
  }

  public static SeekInstance() : HabitancyType {
    let habitancyType: HabitancyType = new HabitancyType();
    habitancyType.isActive = null;
    habitancyType.ResetPaginate();
    return habitancyType;
  }

  public static Validate(habitancyType: HabitancyType) : boolean {
    let result = Validator.Validate(habitancyType.title);
    if(result === false)
      console.log('HabitancyType is unvalid : ', habitancyType);
    return result;
  }
}