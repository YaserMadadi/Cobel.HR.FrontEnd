import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { PropertyOption } from '../PropertyOption/propertyOption';
import { Entity } from '../Entity/entity';


@Directive()
export class Property extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Property.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Core', 'Property', 'Property');

  //endregion

  //#region Fields

	public entity: Entity = new Entity();
	
	public title: string = '';
	
	public persianSynonym: string = '';
	
	public description: string = '';
	
	public fileName: string = '';

	//#endregion

  //#region Collection Properties

  public listOfPropertyOption: PropertyOption[] = [];

  //#endregion

  
  public get SeekInstance(): Property {
    return Property.SeekInstance();
  }

  public static SeekInstance() : Property {
    let property: Property = new Property();
    // No Item...
    property.ResetPaginate();
    return property;
  }

  public static Validate(property: Property) : boolean {
    let result = Validator.Validate(property.entity) &&
					Validator.Validate(property.title) &&
					Validator.Validate(property.persianSynonym) &&
					Validator.Validate(property.fileName);
    if(result === false)
      console.log('Property is unvalid : ', property);
    return result;
  }
}