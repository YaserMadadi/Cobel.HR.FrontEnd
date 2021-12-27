import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { TargetSettingPhase } from './targetSettingPhase';
import { TargetSettingPhaseServiceCollection } from './targetSettingPhase.service.collection';

import { EmployeeService } from '../../HR/Employee/employee.service';
import { PositionService } from '../../HR/Position/position.service';
import { YearService } from '../../Base/Year/year.service';
import { BehavioralObjective } from '../BehavioralObjective/behavioralObjective';
import { FinalApprovement } from '../FinalApprovement/finalApprovement';
import { FunctionalObjective } from '../FunctionalObjective/functionalObjective';
import { FinalAppraise } from '../FinalAppraise/finalAppraise';
import { QuantitativeAppraise } from '../QuantitativeAppraise/quantitativeAppraise';
import { OperationalAppraise } from '../OperationalAppraise/operationalAppraise';
import { NonOperationalAppraise } from '../NonOperationalAppraise/nonOperationalAppraise';
import { QualitativeObjective } from '../QualitativeObjective/qualitativeObjective';
import  { TargetSettingTypeService } from '../../Base.PMS/TargetSettingType/targetSettingType.service';
import  { TargetSettingModeService } from '../../Base.PMS/TargetSettingMode/targetSettingMode.service';

@Injectable({ providedIn: 'root' })
export class TargetSettingPhaseService extends Service<TargetSettingPhase> implements IService<TargetSettingPhase> {

  constructor(public ServiceCollection: TargetSettingPhaseServiceCollection,
    public TargetSettingModeService: TargetSettingModeService,
    public TargetSettingTypeService: TargetSettingTypeService,
    public YearService: YearService) {
    super(ServiceCollection.API_Operation, TargetSettingPhase.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  CreateInstance() {
    return new TargetSettingPhase();
  }

  RetrieveById(id: number): Promise<TargetSettingPhase> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<TargetSettingPhase[]> {
    return super.RetrieveAll();
  }

  Save(targetSettingPhase: TargetSettingPhase): Promise<TargetSettingPhase> {
    if (!TargetSettingPhase.Validate(targetSettingPhase)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(targetSettingPhase);
    }
    return super.Save(targetSettingPhase);
  }

  SaveAttached(targetSettingPhase: TargetSettingPhase): Promise<TargetSettingPhase> {
    if (!TargetSettingPhase.Validate(targetSettingPhase)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(targetSettingPhase);
    }
    return super.SaveAttached(targetSettingPhase);
  }

  SaveCollection(targetSettingPhaseList: TargetSettingPhase[]): Promise<Result> {
    return super.SaveCollection(targetSettingPhaseList);
  }

  Delete(targetSettingPhase: TargetSettingPhase): Promise<boolean> {
    return super.Delete(targetSettingPhase);
  }

  Seek(targetSettingPhase: TargetSettingPhase = TargetSettingPhase.SeekInstance()): Promise<TargetSettingPhase[]> {
    return super.Seek(targetSettingPhase);
  }

  SeekLast(targetSettingPhase: TargetSettingPhase): Promise<TargetSettingPhase> {
    return super.SeekLast(targetSettingPhase);
  }

  SeekByValue(value: string = ''): Promise<TargetSettingPhase[]> {
    return super.SeekByValue(value);
  }

  //endregion


  //Remove Temprorally
}