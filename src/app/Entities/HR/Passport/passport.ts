import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Person } from '../Person/person';


@Directive()
export class Passport extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Passport.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('HR', 'Passport', 'Passport');

  //endregion

  //#region Fields

	public person: Person = new Person();
	
	public passportNumber: string = '';
	
	public issueDate: Date = new Date();
	
	public expireDate: Date = new Date();

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): Passport {
    return Passport.SeekInstance();
  }

  public static SeekInstance() : Passport {
    let passport: Passport = new Passport();
    passport.issueDate = null;
		passport.expireDate = null;
    passport.ResetPaginate();
    return passport;
  }

  public static Validate(passport: Passport) : boolean {
    let result = Validator.Validate(passport.person) &&
					Validator.Validate(passport.passportNumber);
    if(result === false)
      console.log('Passport is unvalid : ', passport);
    return result;
  }
}