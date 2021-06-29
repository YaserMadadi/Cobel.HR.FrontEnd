import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { MeasurementUnit } from './measurementUnit';
import { MeasurementUnitServiceCollection } from './measurementUnit.service.collection';

import { FunctionalKPI } from '../../PMS/FunctionalKPI/functionalKPI';


@Injectable({ providedIn: 'root' })
export class MeasurementUnitService extends Service<MeasurementUnit> implements IService<MeasurementUnit> {

  constructor(public ServiceCollection: MeasurementUnitServiceCollection) {
    super(ServiceCollection.API_Operation, MeasurementUnit.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<MeasurementUnit> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<MeasurementUnit[]> {
    return super.RetrieveAll();
  }

  Save(measurementUnit: MeasurementUnit): Promise<MeasurementUnit> {
    if (!MeasurementUnit.Validate(measurementUnit)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(measurementUnit);
    }
    return super.Save(measurementUnit);
  }

  SaveAttached(measurementUnit: MeasurementUnit): Promise<MeasurementUnit> {
    if (!MeasurementUnit.Validate(measurementUnit)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(measurementUnit);
    }
    return super.SaveAttached(measurementUnit);
  }

  SaveCollection(measurementUnitList: MeasurementUnit[]): Promise<Result> {
    return super.SaveCollection(measurementUnitList);
  }

  Delete(measurementUnit: MeasurementUnit): Promise<boolean> {
    return super.Delete(measurementUnit);
  }

  Seek(measurementUnit: MeasurementUnit = MeasurementUnit.SeekInstance()): Promise<MeasurementUnit[]> {
    return super.Seek(measurementUnit);
  }

  SeekLast(measurementUnit: MeasurementUnit): Promise<MeasurementUnit> {
    return super.SeekLast(measurementUnit);
  }

  SeekByValue(value: string = ''): Promise<MeasurementUnit[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}