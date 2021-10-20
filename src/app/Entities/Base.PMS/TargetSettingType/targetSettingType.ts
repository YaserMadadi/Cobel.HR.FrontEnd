import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { TargetSetting } from '../../PMS/TargetSetting/targetSetting';


@Directive()
export class TargetSettingType extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = TargetSettingType.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base.PMS', 'TargetSettingType', 'TargetSettingType');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfTargetSetting: TargetSetting[] = [];

  //#endregion

  
  public get SeekInstance(): TargetSettingType {
    return TargetSettingType.SeekInstance();
  }

  public static SeekInstance() : TargetSettingType {
    let targetSettingType: TargetSettingType = new TargetSettingType();
    targetSettingType.isActive = null;
    targetSettingType.ResetPaginate();
    return targetSettingType;
  }

  public static Validate(targetSettingType: TargetSettingType) : boolean {
    let result = Validator.Validate(targetSettingType.title);
    if(result === false)
      console.log('TargetSettingType is unvalid : ', targetSettingType);
    return result;
  }
}
