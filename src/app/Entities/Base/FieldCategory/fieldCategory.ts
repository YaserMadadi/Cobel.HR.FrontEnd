import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { PersonCertificate } from '../../HR/PersonCertificate/personCertificate';


@Directive()
export class FieldCategory extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = FieldCategory.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base', 'FieldCategory', 'Field Category');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfPersonCertificate: PersonCertificate[] = [];

  //#endregion

  
  public get SeekInstance(): FieldCategory {
    return FieldCategory.SeekInstance();
  }

  public static SeekInstance() : FieldCategory {
    let fieldCategory: FieldCategory = new FieldCategory();
    fieldCategory.isActive = null;
    fieldCategory.ResetPaginate();
    return fieldCategory;
  }

  public static Validate(fieldCategory: FieldCategory) : boolean {
    let result = Validator.Validate(fieldCategory.title);
    if(result === false)
      console.log('FieldCategory is unvalid : ', fieldCategory);
    return result;
  }
}