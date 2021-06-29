import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { ConfigQualitativeKPI } from '../ConfigQualitativeKPI/configQualitativeKPI';
import { ConfigTargetSetting } from '../ConfigTargetSetting/configTargetSetting';


@Directive()
export class ConfigQualitativeObjective extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = ConfigQualitativeObjective.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'ConfigQualitativeObjective', 'Config Qualitative Objective');

  //endregion

  //#region Fields

	public configTargetSetting: ConfigTargetSetting = new ConfigTargetSetting();
	
	public title: string = '';
	
	public weight: number = 0;
	
	public totalKPIWeight: number = 0;

	//#endregion

  //#region Collection Properties

  public listOfQualitativeObjectiveConfig_ConfigQualitativeKPI: ConfigQualitativeKPI[] = [];

  //#endregion

  
  public get SeekInstance(): ConfigQualitativeObjective {
    return ConfigQualitativeObjective.SeekInstance();
  }

  public static SeekInstance() : ConfigQualitativeObjective {
    let configQualitativeObjective: ConfigQualitativeObjective = new ConfigQualitativeObjective();
    // No Item...
    configQualitativeObjective.ResetPaginate();
    return configQualitativeObjective;
  }

  public static Validate(configQualitativeObjective: ConfigQualitativeObjective) : boolean {
    let result = Validator.Validate(configQualitativeObjective.configTargetSetting) &&
					Validator.Validate(configQualitativeObjective.title);
    if(result === false)
      console.log('ConfigQualitativeObjective is unvalid : ', configQualitativeObjective);
    return result;
  }
}