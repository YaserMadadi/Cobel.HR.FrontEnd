import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { MilitaryServiceInclusive } from '../../HR/MilitaryServiceInclusive/militaryServiceInclusive';


@Directive()
export class InclusiveType extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = InclusiveType.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base', 'InclusiveType', 'Inclusive Type');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfMilitaryServiceInclusive: MilitaryServiceInclusive[] = [];

  //#endregion

  
  public get SeekInstance(): InclusiveType {
    return InclusiveType.SeekInstance();
  }

  public static SeekInstance() : InclusiveType {
    let inclusiveType: InclusiveType = new InclusiveType();
    inclusiveType.isActive = null;
    inclusiveType.ResetPaginate();
    return inclusiveType;
  }

  public static Validate(inclusiveType: InclusiveType) : boolean {
    let result = Validator.Validate(inclusiveType.title);
    if(result === false)
      console.log('InclusiveType is unvalid : ', inclusiveType);
    return result;
  }
}