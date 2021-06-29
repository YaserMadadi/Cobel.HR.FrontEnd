import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Person } from '../Person/person';
import { HabitancyType } from '../../Base/HabitancyType/habitancyType';
import { City } from '../../Base/City/city';


@Directive()
export class Habitancy extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Habitancy.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('HR', 'Habitancy', 'Habitancy');

  //endregion

  //#region Fields

	public person: Person = new Person();
	
	public habitancyType: HabitancyType = new HabitancyType();
	
	public city: City = new City();
	
	public address: string = '';
	
	public postalCode: string = '';

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): Habitancy {
    return Habitancy.SeekInstance();
  }

  public static SeekInstance() : Habitancy {
    let habitancy: Habitancy = new Habitancy();
    // No Item...
    habitancy.ResetPaginate();
    return habitancy;
  }

  public static Validate(habitancy: Habitancy) : boolean {
    let result = Validator.Validate(habitancy.person) &&
					Validator.Validate(habitancy.habitancyType) &&
					Validator.Validate(habitancy.city) &&
					Validator.Validate(habitancy.address) &&
					Validator.Validate(habitancy.postalCode);
    if(result === false)
      console.log('Habitancy is unvalid : ', habitancy);
    return result;
  }
}