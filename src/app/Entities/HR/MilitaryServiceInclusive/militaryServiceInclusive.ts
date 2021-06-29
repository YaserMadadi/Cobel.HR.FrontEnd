import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { MilitaryService } from '../MilitaryService/militaryService';
import { InclusiveType } from '../../Base/InclusiveType/inclusiveType';


@Directive()
export class MilitaryServiceInclusive extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = MilitaryServiceInclusive.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('HR', 'MilitaryServiceInclusive', 'Military Service Inclusive');

  //endregion

  //#region Fields

	public militaryService: MilitaryService = new MilitaryService();
	
	public inclusiveType: InclusiveType = new InclusiveType();
	
	public comment: string = '';

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): MilitaryServiceInclusive {
    return MilitaryServiceInclusive.SeekInstance();
  }

  public static SeekInstance() : MilitaryServiceInclusive {
    let militaryServiceInclusive: MilitaryServiceInclusive = new MilitaryServiceInclusive();
    // No Item...
    militaryServiceInclusive.ResetPaginate();
    return militaryServiceInclusive;
  }

  public static Validate(militaryServiceInclusive: MilitaryServiceInclusive) : boolean {
    let result = Validator.Validate(militaryServiceInclusive.militaryService) &&
					Validator.Validate(militaryServiceInclusive.inclusiveType);
    if(result === false)
      console.log('MilitaryServiceInclusive is unvalid : ', militaryServiceInclusive);
    return result;
  }
}