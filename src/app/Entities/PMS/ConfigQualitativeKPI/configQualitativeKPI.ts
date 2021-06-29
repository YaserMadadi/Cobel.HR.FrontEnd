import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { ConfigQualitativeObjective } from '../ConfigQualitativeObjective/configQualitativeObjective';


@Directive()
export class ConfigQualitativeKPI extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = ConfigQualitativeKPI.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'ConfigQualitativeKPI', 'Config Qualitative KPI');

  //endregion

  //#region Fields

	public configQualitativeObjective: ConfigQualitativeObjective = new ConfigQualitativeObjective();
	
	public title: string = '';
	
	public weight: number = 0;

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): ConfigQualitativeKPI {
    return ConfigQualitativeKPI.SeekInstance();
  }

  public static SeekInstance() : ConfigQualitativeKPI {
    let configQualitativeKPI: ConfigQualitativeKPI = new ConfigQualitativeKPI();
    // No Item...
    configQualitativeKPI.ResetPaginate();
    return configQualitativeKPI;
  }

  public static Validate(configQualitativeKPI: ConfigQualitativeKPI) : boolean {
    let result = Validator.Validate(configQualitativeKPI.configQualitativeObjective) &&
					Validator.Validate(configQualitativeKPI.title);
    if(result === false)
      console.log('ConfigQualitativeKPI is unvalid : ', configQualitativeKPI);
    return result;
  }
}