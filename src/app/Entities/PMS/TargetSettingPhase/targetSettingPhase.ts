import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { BehavioralObjective } from '../BehavioralObjective/behavioralObjective';
import { FinalApprovement } from '../FinalApprovement/finalApprovement';
import { FunctionalObjective } from '../FunctionalObjective/functionalObjective';
import { FinalAppraise } from '../FinalAppraise/finalAppraise';
import { QuantitativeAppraise } from '../QuantitativeAppraise/quantitativeAppraise';
import { OperationalAppraise } from '../OperationalAppraise/operationalAppraise';
import { NonOperationalAppraise } from '../NonOperationalAppraise/nonOperationalAppraise';
import { QualitativeObjective } from '../QualitativeObjective/qualitativeObjective';
import { Employee } from '../../HR/Employee/employee';
import { Position } from '../../HR/Position/position';
import { Year } from '../../Base/Year/year';
import { TargetSettingType } from '../../Base.PMS/TargetSettingType/targetSettingType';
import { TargetSettingMode } from '../../Base.PMS/TargetSettingMode/targetSettingMode';


@Directive()
export class TargetSettingPhase extends BusinessObject implements OnInit {

  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = TargetSettingPhase.Info) {

    super(id, descriptor, info);

  }

  ngOnInit() {

  }



  //region Info

  public static readonly Info: Info = new Info('PMS', 'TargetSettingPhase', 'Target Setting Phase');

  //endregion

  //#region Fields

   public year: Year = new Year();

  public targetSettingType: TargetSettingType = new TargetSettingType();
  
  public targetSettingMode: TargetSettingMode = new TargetSettingMode();

  //#endregion

  //#region Collection Properties

  //#endregion


  public get SeekInstance(): TargetSettingPhase {
    return TargetSettingPhase.SeekInstance();
  }

  public static SeekInstance(): TargetSettingPhase {
    let targetSetting: TargetSettingPhase = new TargetSettingPhase();
    targetSetting.ResetPaginate();
    return targetSetting;
  }

  public static Validate(targetSettingPhase: TargetSettingPhase): boolean {
    let result = Validator.Validate(targetSettingPhase.year) &&
      Validator.Validate(targetSettingPhase.targetSettingType) &&
      Validator.Validate(targetSettingPhase.targetSettingMode);
      
    if (result === false)
      console.log('TargetSettingPhase is unvalid : ', targetSettingPhase);
    return result;
  }
}