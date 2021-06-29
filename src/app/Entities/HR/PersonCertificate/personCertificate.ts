import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Person } from '../Person/person';
import { FieldCategory } from '../../Base/FieldCategory/fieldCategory';


@Directive()
export class PersonCertificate extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = PersonCertificate.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('HR', 'PersonCertificate', 'Person Certificate');

  //endregion

  //#region Fields

	public person: Person = new Person();
	
	public fieldCategory: FieldCategory = new FieldCategory();
	
	public title: string = '';
	
	public comment: string = '';

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): PersonCertificate {
    return PersonCertificate.SeekInstance();
  }

  public static SeekInstance() : PersonCertificate {
    let personCertificate: PersonCertificate = new PersonCertificate();
    // No Item...
    personCertificate.ResetPaginate();
    return personCertificate;
  }

  public static Validate(personCertificate: PersonCertificate) : boolean {
    let result = Validator.Validate(personCertificate.person) &&
					Validator.Validate(personCertificate.fieldCategory) &&
					Validator.Validate(personCertificate.title);
    if(result === false)
      console.log('PersonCertificate is unvalid : ', personCertificate);
    return result;
  }
}