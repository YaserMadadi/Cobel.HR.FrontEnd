import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { City } from '../City/city';


@Directive()
export class Province extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Province.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base', 'Province', 'Province');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfCity: City[] = [];

  //#endregion

  
  public get SeekInstance(): Province {
    return Province.SeekInstance();
  }

  public static SeekInstance() : Province {
    let province: Province = new Province();
    province.isActive = null;
    province.ResetPaginate();
    return province;
  }

  public static Validate(province: Province) : boolean {
    let result = Validator.Validate(province.title);
    if(result === false)
      console.log('Province is unvalid : ', province);
    return result;
  }
}