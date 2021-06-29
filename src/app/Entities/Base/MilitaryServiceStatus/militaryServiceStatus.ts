import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { MilitaryService } from '../../HR/MilitaryService/militaryService';


@Directive()
export class MilitaryServiceStatus extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = MilitaryServiceStatus.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base', 'MilitaryServiceStatus', 'Military Service Status');

  //endregion

  //#region Fields

	public title: string = '';

	//#endregion

  //#region Collection Properties

  public listOfMilitaryService: MilitaryService[] = [];

  //#endregion

  
  public get SeekInstance(): MilitaryServiceStatus {
    return MilitaryServiceStatus.SeekInstance();
  }

  public static SeekInstance() : MilitaryServiceStatus {
    let militaryServiceStatus: MilitaryServiceStatus = new MilitaryServiceStatus();
    // No Item...
    militaryServiceStatus.ResetPaginate();
    return militaryServiceStatus;
  }

  public static Validate(militaryServiceStatus: MilitaryServiceStatus) : boolean {
    let result = Validator.Validate(militaryServiceStatus.title);
    if(result === false)
      console.log('MilitaryServiceStatus is unvalid : ', militaryServiceStatus);
    return result;
  }
}