import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Person } from '../Person/person';
import { RelativeType } from '../../Base.HR/RelativeType/relativeType';


@Directive()
export class Relative extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Relative.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('HR', 'Relative', 'Relative');

  //endregion

  //#region Fields

	public peson: Person = new Person();
	
	public firstName: string = '';
	
	public lastName: string = '';
	
	public nationalCode: string = '';
	
	public birthDate: Date = new Date();
	
	public relationType: RelativeType = new RelativeType();

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): Relative {
    return Relative.SeekInstance();
  }

  public static SeekInstance() : Relative {
    let relative: Relative = new Relative();
    relative.birthDate = null;
    relative.ResetPaginate();
    return relative;
  }

  public static Validate(relative: Relative) : boolean {
    let result = Validator.Validate(relative.peson) &&
					Validator.Validate(relative.firstName) &&
					Validator.Validate(relative.lastName) &&
					Validator.Validate(relative.nationalCode) &&
					Validator.Validate(relative.relationType);
    if(result === false)
      console.log('Relative is unvalid : ', relative);
    return result;
  }
}