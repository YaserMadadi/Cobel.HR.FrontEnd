import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Person } from '../../HR/Person/person';


@Directive()
export class Country extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Country.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base', 'Country', 'Country');

  //endregion

  //#region Fields

	public englishTitle: string = '';
	
	public persianTitle: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfNationality_Person: Person[] = [];

  //#endregion

  
  public get SeekInstance(): Country {
    return Country.SeekInstance();
  }

  public static SeekInstance() : Country {
    let country: Country = new Country();
    country.isActive = null;
    country.ResetPaginate();
    return country;
  }

  public static Validate(country: Country) : boolean {
    let result = Validator.Validate(country.englishTitle) &&
					Validator.Validate(country.persianTitle);
    if(result === false)
      console.log('Country is unvalid : ', country);
    return result;
  }
}