import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Person } from '../../HR/Person/person';


@Directive()
export class Religion extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Religion.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base', 'Religion', 'Religion');

  //endregion

  //#region Fields

	public englishTitle: string = '';
	
	public persianTitle: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfPerson: Person[] = [];

  //#endregion

  
  public get SeekInstance(): Religion {
    return Religion.SeekInstance();
  }

  public static SeekInstance() : Religion {
    let religion: Religion = new Religion();
    religion.isActive = null;
    religion.ResetPaginate();
    return religion;
  }

  public static Validate(religion: Religion) : boolean {
    let result = Validator.Validate(religion.englishTitle) &&
					Validator.Validate(religion.persianTitle);
    if(result === false)
      console.log('Religion is unvalid : ', religion);
    return result;
  }
}