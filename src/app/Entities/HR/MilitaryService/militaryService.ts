import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { MilitaryServiceInclusive } from '../MilitaryServiceInclusive/militaryServiceInclusive';
import { MilitaryServiceExcemption } from '../MilitaryServiceExcemption/militaryServiceExcemption';
import { Person } from '../Person/person';
import { MilitaryServiceStatus } from '../../Base/MilitaryServiceStatus/militaryServiceStatus';


@Directive()
export class MilitaryService extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = MilitaryService.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('HR', 'MilitaryService', 'Military Service');

  //endregion

  //#region Fields

	public person: Person = new Person();
	
	public militaryServiceStatus: MilitaryServiceStatus = new MilitaryServiceStatus();

	//#endregion

  //#region Collection Properties

  public listOfMilitaryServiceInclusive: MilitaryServiceInclusive[] = [];
	
	public listOfMilitaryServiceExcemption: MilitaryServiceExcemption[] = [];

  //#endregion

  
  public get SeekInstance(): MilitaryService {
    return MilitaryService.SeekInstance();
  }

  public static SeekInstance() : MilitaryService {
    let militaryService: MilitaryService = new MilitaryService();
    // No Item...
    militaryService.ResetPaginate();
    return militaryService;
  }

  public static Validate(militaryService: MilitaryService) : boolean {
    let result = Validator.Validate(militaryService.person) &&
					Validator.Validate(militaryService.militaryServiceStatus);
    if(result === false)
      console.log('MilitaryService is unvalid : ', militaryService);
    return result;
  }
}