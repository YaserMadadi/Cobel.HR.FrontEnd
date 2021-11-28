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


@Directive()
export class TargetSetting extends BusinessObject implements OnInit {

  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = TargetSetting.Info) {

    super(id, descriptor, info);

  }

  ngOnInit() {

  }



  //region Info

  public static readonly Info: Info = new Info('PMS', 'TargetSetting', 'Target Setting');

  //endregion

  //#region Fields

  public employee: Employee = new Employee();

  public position: Position = new Position();

  public year: Year = new Year();

  public date: Date = new Date();

  public targetSettingType: TargetSettingType = new TargetSettingType();

  public appraiser: Employee = new Employee();

  public comment: string = '';

  public isLocked: boolean = false;

  public isVisible: boolean = false;

  public isValid: boolean = false;
  
  public totalFunctionalWeight: number;
  
  public totalBehavioralWeight: number;
  
  public totalQualitativeWeight: number;
  
  public totalQuantitativeWeight: number;




  //#endregion

  //#region Collection Properties

  public listOfBehavioralObjective: BehavioralObjective[] = [];

  public listOfFinalApprovement: FinalApprovement[] = [];

  public listOfFunctionalObjective: FunctionalObjective[] = [];

  public listOfFinalAppraise: FinalAppraise[] = [];

  public listOfQuantitativeAppraise: QuantitativeAppraise[] = [];

  public listOfOperationalAppraise: OperationalAppraise[] = [];

  public listOfNonOperationalAppraise: NonOperationalAppraise[] = [];

  public listOfQualitativeObjective: QualitativeObjective[] = [];

  //#endregion


  public get SeekInstance(): TargetSetting {
    return TargetSetting.SeekInstance();
  }

  public static SeekInstance(): TargetSetting {
    let targetSetting: TargetSetting = new TargetSetting();
    targetSetting.date = null;
    targetSetting.isLocked = null;
    targetSetting.isVisible = null;
    targetSetting.isValid = null;
    targetSetting.ResetPaginate();
    return targetSetting;
  }

  public static Validate(targetSetting: TargetSetting): boolean {
    let result = Validator.Validate(targetSetting.employee) &&
      Validator.Validate(targetSetting.position) &&
      Validator.Validate(targetSetting.year) &&
      Validator.Validate(targetSetting.appraiser) &&
      Validator.Validate(targetSetting.targetSettingType);
    if (result === false)
      console.log('TargetSetting is unvalid : ', targetSetting);
    return result;
  }
}