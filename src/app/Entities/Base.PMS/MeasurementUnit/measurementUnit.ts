import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { FunctionalKPI } from '../../PMS/FunctionalKPI/functionalKPI';


@Directive()
export class MeasurementUnit extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = MeasurementUnit.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base.PMS', 'MeasurementUnit', 'Measurement Unit');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfFunctionalKPI: FunctionalKPI[] = [];

  //#endregion

  
  public get SeekInstance(): MeasurementUnit {
    return MeasurementUnit.SeekInstance();
  }

  public static SeekInstance() : MeasurementUnit {
    let measurementUnit: MeasurementUnit = new MeasurementUnit();
    measurementUnit.isActive = null;
    measurementUnit.ResetPaginate();
    return measurementUnit;
  }

  public static Validate(measurementUnit: MeasurementUnit) : boolean {
    let result = Validator.Validate(measurementUnit.title);
    if(result === false)
      console.log('MeasurementUnit is unvalid : ', measurementUnit);
    return result;
  }
}