import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Quarter } from './quarter';
import { QuarterServiceCollection } from './quarter.service.collection';

import { YearQuarter } from '../YearQuarter/yearQuarter';


@Injectable({ providedIn: 'root' })
export class QuarterService extends Service<Quarter> implements IService<Quarter> {

  constructor(public ServiceCollection: QuarterServiceCollection) {
    super(ServiceCollection.API_Operation, Quarter.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<Quarter> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Quarter[]> {
    return super.RetrieveAll();
  }

  Save(quarter: Quarter): Promise<Quarter> {
    if (!Quarter.Validate(quarter)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(quarter);
    }
    return super.Save(quarter);
  }

  SaveAttached(quarter: Quarter): Promise<Quarter> {
    if (!Quarter.Validate(quarter)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(quarter);
    }
    return super.SaveAttached(quarter);
  }

  SaveCollection(quarterList: Quarter[]): Promise<Result> {
    return super.SaveCollection(quarterList);
  }

  Delete(quarter: Quarter): Promise<boolean> {
    return super.Delete(quarter);
  }

  Seek(quarter: Quarter = Quarter.SeekInstance()): Promise<Quarter[]> {
    return super.Seek(quarter);
  }

  SeekLast(quarter: Quarter): Promise<Quarter> {
    return super.SeekLast(quarter);
  }

  SeekByValue(value: string = ''): Promise<Quarter[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}