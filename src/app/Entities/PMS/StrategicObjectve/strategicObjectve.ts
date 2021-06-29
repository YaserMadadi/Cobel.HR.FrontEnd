import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';


@Directive()
export class StrategicObjectve extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = StrategicObjectve.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'StrategicObjectve', 'Strategic Objectve');

  //endregion

  //#region Fields

	public fromDate: Date = new Date();
	
	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): StrategicObjectve {
    return StrategicObjectve.SeekInstance();
  }

  public static SeekInstance() : StrategicObjectve {
    let strategicObjectve: StrategicObjectve = new StrategicObjectve();
    strategicObjectve.fromDate = null;
		strategicObjectve.isActive = null;
    strategicObjectve.ResetPaginate();
    return strategicObjectve;
  }

  public static Validate(strategicObjectve: StrategicObjectve) : boolean {
    let result = Validator.Validate(strategicObjectve.title);
    if(result === false)
      console.log('StrategicObjectve is unvalid : ', strategicObjectve);
    return result;
  }
}