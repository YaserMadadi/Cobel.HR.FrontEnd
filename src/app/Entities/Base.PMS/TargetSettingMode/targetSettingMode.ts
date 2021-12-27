import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { TargetSetting } from '../../PMS/TargetSetting/targetSetting';


@Directive()
export class TargetSettingMode extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = TargetSettingMode.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base.PMS', 'TargetSettingMode', 'TargetSettingMode');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfTargetSetting: TargetSetting[] = [];

  //#endregion

  
  public get SeekInstance(): TargetSettingMode {
    return TargetSettingMode.SeekInstance();
  }

  public static SeekInstance() : TargetSettingMode {
    let targetSettingMode: TargetSettingMode = new TargetSettingMode();
    targetSettingMode.isActive = null;
    targetSettingMode.ResetPaginate();
    return targetSettingMode;
  }

  public static Validate(targetSettingMode: TargetSettingMode) : boolean {
    let result = Validator.Validate(targetSettingMode.title);
    if(result === false)
      console.log('TargetSettingMode is unvalid : ', targetSettingMode);
    return result;
  }
}
