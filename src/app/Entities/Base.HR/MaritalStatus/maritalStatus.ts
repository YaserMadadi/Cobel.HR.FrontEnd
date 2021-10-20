import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Person } from '../../HR/Person/person';


@Directive()
export class MaritalStatus extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = MaritalStatus.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base.HR', 'MaritalStatus', 'MaritalStatus');

  //endregion

  //#region Fields

	public englishTitle: string = '';
	
	public persianTitle: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfPerson: Person[] = [];

  //#endregion

  
  public get SeekInstance(): MaritalStatus {
    return MaritalStatus.SeekInstance();
  }

  public static SeekInstance() : MaritalStatus {
    let maritalStatus: MaritalStatus = new MaritalStatus();
    maritalStatus.isActive = null;
    maritalStatus.ResetPaginate();
    return maritalStatus;
  }

  public static Validate(maritalStatus: MaritalStatus) : boolean {
    let result = Validator.Validate(maritalStatus.englishTitle) &&
					Validator.Validate(maritalStatus.persianTitle);
    if(result === false)
      console.log('MaritalStatus is unvalid : ', maritalStatus);
    return result;
  }
}
