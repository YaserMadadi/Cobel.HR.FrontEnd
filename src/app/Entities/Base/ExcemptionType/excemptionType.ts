import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { MilitaryServiceExcemption } from '../../HR/MilitaryServiceExcemption/militaryServiceExcemption';


@Directive()
export class ExcemptionType extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = ExcemptionType.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base', 'ExcemptionType', 'Excemption Type');

  //endregion

  //#region Fields

	public title: string = '';

	//#endregion

  //#region Collection Properties

  public listOfMilitaryServiceExcemption: MilitaryServiceExcemption[] = [];

  //#endregion

  
  public get SeekInstance(): ExcemptionType {
    return ExcemptionType.SeekInstance();
  }

  public static SeekInstance() : ExcemptionType {
    let excemptionType: ExcemptionType = new ExcemptionType();
    // No Item...
    excemptionType.ResetPaginate();
    return excemptionType;
  }

  public static Validate(excemptionType: ExcemptionType) : boolean {
    let result = Validator.Validate(excemptionType.title);
    if(result === false)
      console.log('ExcemptionType is unvalid : ', excemptionType);
    return result;
  }
}