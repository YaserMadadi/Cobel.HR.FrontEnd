import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';


@Directive()
export class Synonym extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Synonym.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('XCode', 'Synonym', 'Synonym');

  //endregion

  //#region Fields

	public schema: string = '';
	
	public name: string = '';
	
	public value: string = '';

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): Synonym {
    return Synonym.SeekInstance();
  }

  public static SeekInstance() : Synonym {
    let synonym: Synonym = new Synonym();
    // No Item...
    synonym.ResetPaginate();
    return synonym;
  }

  public static Validate(synonym: Synonym) : boolean {
    let result = Validator.Validate(synonym.schema) &&
					Validator.Validate(synonym.name) &&
					Validator.Validate(synonym.value);
    if(result === false)
      console.log('Synonym is unvalid : ', synonym);
    return result;
  }
}