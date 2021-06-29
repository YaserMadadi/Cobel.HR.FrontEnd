import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { ConfigQualitativeObjective } from '../ConfigQualitativeObjective/configQualitativeObjective';
import { Position } from '../../HR/Position/position';


@Directive()
export class ConfigTargetSetting extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = ConfigTargetSetting.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'ConfigTargetSetting', 'Config Target Setting');

  //endregion

  //#region Fields

	public position: Position = new Position();
	
	public fromDate: Date = new Date();
	
	public quantitativeWeight: number = 0;
	
	public qualitativeWeight: number = 0;
	
	public qualitativeNonBehavioralWeight: number = 0;
	
	public qualitativeBehavioralWeight: number = 0;

	//#endregion

  //#region Collection Properties

  public listOfTargetSettingConfig_ConfigQualitativeObjective: ConfigQualitativeObjective[] = [];

  //#endregion

  
  public get SeekInstance(): ConfigTargetSetting {
    return ConfigTargetSetting.SeekInstance();
  }

  public static SeekInstance() : ConfigTargetSetting {
    let configTargetSetting: ConfigTargetSetting = new ConfigTargetSetting();
    configTargetSetting.fromDate = null;
    configTargetSetting.ResetPaginate();
    return configTargetSetting;
  }

  public static Validate(configTargetSetting: ConfigTargetSetting) : boolean {
    let result = Validator.Validate(configTargetSetting.position);
    if(result === false)
      console.log('ConfigTargetSetting is unvalid : ', configTargetSetting);
    return result;
  }
}