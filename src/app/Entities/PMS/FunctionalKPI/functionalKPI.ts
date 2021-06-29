import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { FunctionalKPIComment } from '../FunctionalKPIComment/functionalKPIComment';
import { FunctionalAppraise } from '../FunctionalAppraise/functionalAppraise';
import { FunctionalObjective } from '../FunctionalObjective/functionalObjective';
import { MeasurementUnit } from '../../Base.PMS/MeasurementUnit/measurementUnit';


@Directive()
export class FunctionalKPI extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = FunctionalKPI.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'FunctionalKPI', 'Functional KPI');

  //endregion

  //#region Fields

	public functionalObjective: FunctionalObjective = new FunctionalObjective();
	
	public title: string = '';
	
	public weight: number = 0;
	
	public measurementUnit: MeasurementUnit = new MeasurementUnit();
	
	public midTarget: number = 0;
	
	public annualTarget: number = 0;

	public employeeScore: number = 0;
	
	public managerScore: number = 0;
	
	public description: string = '';

	//#endregion

  //#region Collection Properties

  public listOfFunctionalKPIComment: FunctionalKPIComment[] = [];
	
	public listOfFunctionalAppraise: FunctionalAppraise[] = [];

  //#endregion

  
  public get SeekInstance(): FunctionalKPI {
    return FunctionalKPI.SeekInstance();
  }

  public static SeekInstance() : FunctionalKPI {
    let functionalKPI: FunctionalKPI = new FunctionalKPI();
    // No Item...
    functionalKPI.ResetPaginate();
    return functionalKPI;
  }

  public static Validate(functionalKPI: FunctionalKPI) : boolean {
    let result = Validator.Validate(functionalKPI.functionalObjective) &&
					Validator.Validate(functionalKPI.title) &&
					Validator.Validate(functionalKPI.measurementUnit);
    if(result === false)
      console.log('FunctionalKPI is unvalid : ', functionalKPI);
    return result;
  }
}