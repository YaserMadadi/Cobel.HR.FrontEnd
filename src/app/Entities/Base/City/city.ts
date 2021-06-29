import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Person } from '../../HR/Person/person';
import { Habitancy } from '../../HR/Habitancy/habitancy';
import { University } from '../University/university';
import { Province } from '../Province/province';


@Directive()
export class City extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = City.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base', 'City', 'City');

  //endregion

  //#region Fields

	public title: string = '';
	
	public province: Province = new Province();
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfBirthCity_Person: Person[] = [];
	
	public listOfHabitancy: Habitancy[] = [];
	
	public listOfUniversity: University[] = [];

  //#endregion

  
  public get SeekInstance(): City {
    return City.SeekInstance();
  }

  public static SeekInstance() : City {
    let city: City = new City();
    city.isActive = null;
    city.ResetPaginate();
    return city;
  }

  public static Validate(city: City) : boolean {
    let result = Validator.Validate(city.title) &&
					Validator.Validate(city.province);
    if(result === false)
      console.log('City is unvalid : ', city);
    return result;
  }
}