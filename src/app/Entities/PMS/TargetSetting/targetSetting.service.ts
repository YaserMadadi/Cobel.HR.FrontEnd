import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { TargetSetting } from './targetSetting';
import { TargetSettingServiceCollection } from './targetSetting.service.collection';

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
export class TargetSettingService extends Service<TargetSetting> implements IService<TargetSetting> {

  constructor(public ServiceCollection: TargetSettingServiceCollection,
    public EmployeeService: EmployeeService,
    public PositionService: PositionService,
    public TargetSettingTypeService: TargetSettingTypeService,
    public TargetSettingModeService: TargetSettingModeService,
    public YearService: YearService) {
    super(ServiceCollection.API_Operation, TargetSetting.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  CreateInstance() {
    return new TargetSetting();
  }

  RetrieveById(id: number): Promise<TargetSetting> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<TargetSetting[]> {
    return super.RetrieveAll();
  }

  Save(targetSetting: TargetSetting): Promise<TargetSetting> {
    if (!TargetSetting.Validate(targetSetting)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(targetSetting);
    }
    return super.Save(targetSetting);
  }

  SaveAttached(targetSetting: TargetSetting): Promise<TargetSetting> {
    if (!TargetSetting.Validate(targetSetting)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(targetSetting);
    }
    return super.SaveAttached(targetSetting);
  }

  SaveCollection(targetSettingList: TargetSetting[]): Promise<Result> {
    return super.SaveCollection(targetSettingList);
  }

  Delete(targetSetting: TargetSetting): Promise<boolean> {
    return super.Delete(targetSetting);
  }

  Seek(targetSetting: TargetSetting = TargetSetting.SeekInstance()): Promise<TargetSetting[]> {
    return super.Seek(targetSetting);
  }

  SeekLast(targetSetting: TargetSetting): Promise<TargetSetting> {
    return super.SeekLast(targetSetting);
  }

  SeekByValue(value: string = ''): Promise<TargetSetting[]> {
    return super.SeekByValue(value);
  }

  //endregion


  //Remove Temprorally
}