import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { MilitaryService } from '../MilitaryService/militaryService';
import { ExcemptionType } from '../../Base/ExcemptionType/excemptionType';


@Directive()
export class MilitaryServiceExcemption extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = MilitaryServiceExcemption.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('HR', 'MilitaryServiceExcemption', 'Military Service Excemption');

  //endregion

  //#region Fields

	public militaryService: MilitaryService = new MilitaryService();
	
	public excemptionType: ExcemptionType = new ExcemptionType();
	
	public comment: string = '';

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): MilitaryServiceExcemption {
    return MilitaryServiceExcemption.SeekInstance();
  }

  public static SeekInstance() : MilitaryServiceExcemption {
    let militaryServiceExcemption: MilitaryServiceExcemption = new MilitaryServiceExcemption();
    // No Item...
    militaryServiceExcemption.ResetPaginate();
    return militaryServiceExcemption;
  }

  public static Validate(militaryServiceExcemption: MilitaryServiceExcemption) : boolean {
    let result = Validator.Validate(militaryServiceExcemption.militaryService) &&
					Validator.Validate(militaryServiceExcemption.excemptionType);
    if(result === false)
      console.log('MilitaryServiceExcemption is unvalid : ', militaryServiceExcemption);
    return result;
  }
}