import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Property } from '../Property/property';


@Directive()
export class PropertyOption extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = PropertyOption.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Core', 'PropertyOption', 'Property Option');

  //endregion

  //#region Fields

	public property: Property = new Property();
	
	public title: string = '';
	
	public description: string = '';

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): PropertyOption {
    return PropertyOption.SeekInstance();
  }

  public static SeekInstance() : PropertyOption {
    let propertyOption: PropertyOption = new PropertyOption();
    // No Item...
    propertyOption.ResetPaginate();
    return propertyOption;
  }

  public static Validate(propertyOption: PropertyOption) : boolean {
    let result = Validator.Validate(propertyOption.property) &&
					Validator.Validate(propertyOption.title);
    if(result === false)
      console.log('PropertyOption is unvalid : ', propertyOption);
    return result;
  }
}